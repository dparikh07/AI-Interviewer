/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://first_owner:lc50XmHIAkEn@ep-steep-snow-a52dfrwc.us-east-2.aws.neon.tech/first?sslmode=require',
    }
  };