import mongoose from "mongoose";

// accept post request with json body
export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "An error occurred while processing the request." }), { status: 500 });
  }
}