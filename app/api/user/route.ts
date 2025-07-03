import { NextResponse } from "next/server";
import { getUser } from "@/lib/data"; // or your user fetching logic

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await getUser(email);

  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Email atau password salah." }, { status: 401 });
  }

  // Don't send password back!
  const { id, nama_depan } = user;
  return NextResponse.json({ id, nama_depan });
}

// export async function POST(request: Request) {
//   // Parse the request body
//   const body = await request.json();
//   const { name } = body;

//   // e.g. Insert new user into your DB
//   const newUser = { id: Date.now(), name };

//   return new Response(JSON.stringify(newUser), {
//     status: 201,
//     headers: { "Content-Type": "application/json" },
//   });
// }
