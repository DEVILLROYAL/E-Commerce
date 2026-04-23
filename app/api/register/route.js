import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return Response.json({ message: "User created", user });
}