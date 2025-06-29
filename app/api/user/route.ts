import { NextResponse } from "next/server";

import { getUser } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const data = await getUser(email);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data", msg: err }, { status: 500 });
  }
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
