import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "admin-panel",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = conn.connection.readyState === 1;
  } catch (error) {
    console.log(error);
  }
}