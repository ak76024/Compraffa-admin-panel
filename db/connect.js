import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "admin-panel",
    });

    isConnected = conn.connection.readyState === 1;

    console.log("MongoDB connected successfully!");
  } catch (error) {
    isConnected = false;
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};