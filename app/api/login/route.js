
import { connectToDB } from "@/db/connect.js";
import signupModule from "@/models/signupModule.js";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const { email, password } = body;

    // Validate fields
    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return Response.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await signupModule.findOne({
      email: normalizedEmail,
    });

    if (!user) {
      return Response.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Compare password with stored hash
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return Response.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    return Response.json(
      { message: "Login successful." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);

    return Response.json(
      { message: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
