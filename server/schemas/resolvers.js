const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Project,
  Interest,
  Education,
  Experience,
  TechnicalSkill,
  CoreCompetency
} = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name
        };
      }
      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];
      const { products } = await order.populate('products');
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      return { session: session.id };
    },
    projects: async () => {
      return Project.find();
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    interests: async () => {
      return Interest.find();
    },
    interest: async (parent, { interestId }) => {
      return Interest.findOne({ _id: interestId });
    },
    educations: async () => {
      return Education.find();
    },
    education: async (parent, { educationId }) => {
      return Education.findOne({ _id: educationId });
    },
    experiences: async () => {
      return Experience.find();
    },
    experience: async (parent, { experienceId }) => {
      return Experience.findOne({ _id: experienceId });
    },
    technicalSkills: async () => {
      return TechnicalSkill.find();
    },
    technicalSkill: async (parent, { technicalSkillId }) => {
      return TechnicalSkill.findOne({ _id: technicalSkillId });
    },
    coreCompetencies: async () => {
      return CoreCompetency.find();
    },
    coreCompetency: async (parent, { coreCompetencyId }) => {
      return CoreCompetency.findOne({ _id: coreCompetencyId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  // 🔑 We call the signToken() function in the resolvers where we want to transmit data securely to generate a signed token:
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }
      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });
        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
        return order;
      }
      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
  // addProject: async (parent, { projectName, category, type, industry, scale, oversight, client }) => {
  //   try {
  //     const project = await Project.create(
  //       {
  //         projectName,
  //         category,
  //         type,
  //         industry,
  //         scale,
  //         oversight,
  //         client,
  //       }
  //     );
  //     return project;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  // removeProject: async (parent, { projectId }) => {
  //   return Project.findOneAndDelete({ _id: projectId });
  // },

  // addUserToProject: async (parent, { gameId, userId }) => {
  //   return await Project.findOneAndUpdate(
  //     { _id: gameId },
  //     {
  //       $addToSet: { users: userId },
  //     },
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );
  // },
  // removeUserFromProject: async (parent, { gameId, userId }) => {
  //   return Project.findOneAndUpdate(
  //     { _id: userId },
  //     { $pull: { users: userId } },
  //     { new: true }
  //   );
  // },

  // addProjectToUser: async (parent, { userId, gameId }) => {
  //   return await User.findOneAndUpdate(
  //     { _id: userId },
  //     {
  //       $addToSet: { games: gameId },
  //     },
  //     {
  //       new: true,
  //       runValidators: true,
  //     }
  //   );
  // },
  // removeProjectFromUser: async (parent, { userId, gameId }) => {
  //   return User.findOneAndUpdate(
  //     { _id: userId },
  //     { $pull: { games: gameId } },
  //     { new: true }
  //   );
  // },
  },

};

module.exports = resolvers;
