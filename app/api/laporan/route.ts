import { NextResponse } from "next/server";

import { getAllLaporan } from "@/lib/data";

export async function GET() {
  try {
    const data = await getAllLaporan();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data", msg: err },
      { status: 500 },
    );
  }
}
