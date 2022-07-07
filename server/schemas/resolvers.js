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
};

module.exports = resolvers;
