import { MongoClient } from "mongodb";

let client;
let db;

async function connect() {
  if (client !== undefined) return db;

  const uri = process.env.MONGODB_URI;
  client = new MongoClient(uri, {
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    db = client.db('users');

    return db;
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
}



export default { connect, getDb: () => db };


