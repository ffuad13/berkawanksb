import postgres from "postgres";

const sql =
  process.env.NODE_ENV === "development"
    ? postgres(process.env.POSTGRES_URL!, {})
    : postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export default sql;
