import mongoose from "mongoose";
import { User } from "../modules/user/user.model";
import dotenv from "dotenv";
dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const adminEmail = "admin@example.com";
    const adminExists = await User.findOne({ email: adminEmail });

    if (!adminExists) {
      await User.create({
        email: adminEmail,
        password: "123123",
        name: "Admin User",
        role: "admin",
      });
    }

    const users = [
      { email: "user1@example.com", password: "123123", name: "Alice", role: "user" },
      { email: "user2@example.com", password: "123123", name: "Bob", role: "user" },
      { email: "user3@example.com", password: "123123", name: "Charlie", role: "user" },
      { email: "user4@example.com", password: "123123", name: "Dane", role: "user" },
      { email: "user5@example.com", password: "123123", name: "John", role: "user" },
    ];

    for (const u of users) {
      const exists = await User.findOne({ email: u.email });
      if (!exists) {
        await User.create(u);
        console.log(`Created user: ${u.email}`);
      } else {
        console.log(`User already exists: ${u.email}`);
      }
    }

    console.log("Seeding completed");
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();