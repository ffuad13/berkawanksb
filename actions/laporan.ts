"use server";

import { insertLaporan } from "@/lib/data";

export async function handleInsertLaporan(formData: FormData) {
  const data = Object.fromEntries(formData) as Record<string, string>;

  const laporan = {
    user_id: data.user_id,
    pelapor: data.pelapor,
    perihal: data.perihal,
    tempat: data.tempat,
    pelaksana: data.pelaksana,
    sasaran: data.sasaran,
    bentuk_kegiatan: data.bentuk_kegiatan,
    tanggal: data.tanggal,
    waktu: data.waktu,
  };

  return await insertLaporan(laporan);
}