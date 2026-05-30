import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns"; // এটি অবশ্যই ইমপোর্ট করতে হবে

// MongoDB Atlas কানেকশন সমস্যার জন্য এটি গুরুত্বপূর্ণ
dns.setServers(['8.8.8.8', '8.8.4.4']);

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("SunCart");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: client, 
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_Client_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        },
      },account: {
        accountLinking: {
            enabled: true,
        }
    }
});