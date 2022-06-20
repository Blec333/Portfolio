const { database, connection } = require("../config/connection");
const { Experience, Project, Interest, Education, User } = require("../models");
const experienceData = require("./experience-seeds");
const interestData = require("./interest-seeds");
const projectData = require("./project-seeds");
const educationData = require("./education-seeds");
const userData = require("./user-seeds");



const seedAll = async () => {

  if (database === "MySQL") {

    const seedExperience = () => Experience.bulkCreate(experienceData);
    const seedProjects = () => Project.bulkCreate(projectData);
    const seedInterests = () => Interest.bulkCreate(interestData);
    const seedEducation = () => Education.bulkCreate(educationData);
    const seedUsers = () => User.bulkCreate(userData);

    await connection.sync({ force: true });
    console.log("\n----- MySQL DB SYNCED -----\n");
    await seedExperience();
    console.log("\n----- Experiences SEEDED -----\n");
    await seedInterests();
    console.log("\n----- Interests SEEDED -----\n");
    await seedProjects();
    console.log("\n----- Projects SEEDED -----\n");
    await seedEducation();
    console.log("\n----- Education SEEDED -----\n");
    console.info('Seeding complete! 🌱');
    process.exit(0);

  } else if (database === "MongoDB") {

    const seedExperience = () => Experience.collection.insertMany(experienceData);
    const seedProjects = () => Project.collection.insertMany(projectData);
    const seedInterests = () => Interest.collection.insertMany(interestData);
    const seedEducation = () => Education.collection.insertMany(educationData);
    const seedUsers = () => User.collection.insertMany(userData);

    connection.on('error', (err) => err);
    connection.once('open', async () => {
      console.log('connected');
      await Experience.deleteMany({});
      await Project.deleteMany({});
      await Interest.deleteMany({});
      await Education.deleteMany({});
      console.log("\n----- Mongo DB CLEARED -----\n");
      await seedExperience();
      console.log("\n----- Experience SEEDED -----\n");
      await seedInterests();
      console.log("\n----- Interests SEEDED -----\n");
      await seedProjects();
      console.log("\n----- Projects SEEDED -----\n");
      await seedEducation();
      console.log("\n----- Education SEEDED -----\n");
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });
  }
}

seedAll();