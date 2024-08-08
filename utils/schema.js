const { pgTable, serial, text, varchar } = require("drizzle-orm/pg-core");

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jsonMockRes').notNull(),
    jobDesc:varchar('jsonMockRes').notNull(),
    jobExperience:varchar('jsonMockRes').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})