import { NextResponse } from "next/server";
import { getFotoByLaporanId } from "@/lib/data";

export async function GET(request: Request, { params }: { params: Promise<{ laporan_id: string }> }) {
  try {
    const { laporan_id } = await params;
    const data = await getFotoByLaporanId(laporan_id);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data", msg: err }, { status: 500 });
  }
}
