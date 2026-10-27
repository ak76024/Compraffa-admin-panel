
import { connectToDB } from "@/db/connect.js";
import signupModule from "@/models/signupModule.js";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDB();

    const body = await req.json();
    const { name, email, password } = body;

    if (!name?.trim() || !email?.trim() || !password) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // if (password.length < 8) {
    //   return Response.json(
    //     { message: "Password must be at least 8 characters." },
    //     { status: 400 }
    //   );
    // }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await signupModule.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return Response.json(
        { message: "Email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new signupModule({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    await user.save();

    return Response.json(
      { message: "Signup successful." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup API error:", error);

    return Response.json(
      { message: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
