import type { Laporan } from "@/types/entities";

import LaporanClient from "./laporanClient";

async function getData(): Promise<Laporan[]> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/laporan`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function Laporan() {
  const data = await getData();

  return <LaporanClient data={data} />;
}
