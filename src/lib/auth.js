import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let _auth;

function createAuth() {
  const client = new MongoClient(process.env.MONGO_DB_URI);
  const db = client.db(process.env.AUTH_DB_NAME);
  return betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    database: mongodbAdapter(db, { client }),
  });
}

export function getAuth() {
  if (!_auth) {
    _auth = createAuth();
  }
  return _auth;
}
