// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

import mongoose, { Schema } from "mongoose";

const DB_URL = "mongodb+srv://admin:admin@cluster0.yj8zd.mongodb.net/";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model<IUser>("User", userSchema);

const users = [
  { name: "Jhon", email: "jhon@gmail.com" },
  { name: "Doe", email: "doe@gmail.com" },
  { name: "JhonDoe", email: "jhon@gmail.com" },
  { name: "Alice", email: "alice@gmail.com" },
];

async function addUsers() {
  try {
    await User.insertMany(users);
    console.log("Users added successfully");
  } catch (err) {
    console.error("Error adding users:", err);
  }
}

async function manageUsers(): Promise<{ email: string }[]> {
  try {
    const users = await User.find();

    const emailCount: { [key: string]: number } = {};
    users.forEach((user) => {
      emailCount[user.email] = (emailCount[user.email] || 0) + 1;
    });

    const duplicatedUsers = Object.keys(emailCount)
      .filter((email) => emailCount[email] > 1)
      .map((email) => ({ email }));

    return duplicatedUsers;
  } catch (err) {
    console.error("Error managing users:", err);
    return [];
  }
}

// Вызов функций
addUsers().then(() => {
  manageUsers().then((duplicatedUsers) => {
    console.log("Users with duplicate:", duplicatedUsers);
  });
});

export { manageUsers };
