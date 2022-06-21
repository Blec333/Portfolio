const { AuthenticationError } = require("apollo-server-express");
const { User, Project, Interest, Education, Experience } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
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
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  // 🔑 We call the signToken() function in the resolvers where we want to transmit data securely to generate a signed token:
  Mutation: {
    // login: async (parent, { username, email, password }) => {
    //   const user = await User.findOne({ email: email });
    //   if (!user) {
    //     throw new AuthenticationError("No user with this email found!");
    //   }
    //   const correctPw = await player.isCorrectPassword(password);
    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect password!");
    //   }
    //   const token = signToken(user);
    //   return { token, user };
    // },
    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   console.log({ token, user });
    //   return { token, user };
    // },
    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },

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

    // addUserToProject: async (parent, { gameId, playerId }) => {
    //   return await Project.findOneAndUpdate(
    //     { _id: gameId },
    //     {
    //       $addToSet: { players: playerId },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // updateUser: async (parent, args, context) => {

    //   try {
    //     if (context.user._id) {
    //       return await User.findOneAndUpdate(
    //         context.user._id, args,
    //         { new: true }
    //       );
    //     } else {
    //       console.log(args)
    //     }

    //   } catch (err) {
    //     console.log("user");
    //     console.log(context.user.id)
    //     console.log("args")
    //     console.log(args)

    //     console.log(err)
    //   }
    // },
    // removeUserFromProject: async (parent, { gameId, playerId }) => {
    //   return Project.findOneAndUpdate(
    //     { _id: userId },
    //     { $pull: { players: playerId } },
    //     { new: true }
    //   );
    // },

    // addProjectToUser: async (parent, { playerId, gameId }) => {
    //   return await User.findOneAndUpdate(
    //     { _id: playerId },
    //     {
    //       $addToSet: { games: gameId },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeProjectFromUser: async (parent, { playerId, gameId }) => {
    //   return User.findOneAndUpdate(
    //     { _id: playerId },
    //     { $pull: { games: gameId } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
