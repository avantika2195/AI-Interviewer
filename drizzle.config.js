/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai%20interview_owner:npg_IxiHoFE8Ovl3@ep-small-sound-a56zmefa-pooler.us-east-2.aws.neon.tech/mockInterview?sslmode=require',
    }
  };