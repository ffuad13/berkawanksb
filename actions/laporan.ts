"use server";

import { insertLaporan, updateLaporan } from "@/lib/data";

export async function handleInsertLaporan(formData: FormData) {
  const { user_id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu } = Object.fromEntries(formData) as Record<string, string>;

  return await insertLaporan({ user_id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu });
}

export async function handleUpdateLaporan(formData:FormData) {
  const { id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu } = Object.fromEntries(formData) as Record<string, string>

  return await updateLaporan({ id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu })
}