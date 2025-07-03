"use server";

import { insertFoto, insertLaporan, updateLaporan } from "@/lib/data";
import { foto } from "@/types/entities";

export async function handleInsertLaporan(formData: FormData) {
  const { user_id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu } = Object.fromEntries(formData) as Record<string, string>;

  return await insertLaporan({ user_id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu });
}

export async function handleUpdateLaporan(formData:FormData) {
  const { id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu, hasil_kegiatan } = Object.fromEntries(formData) as Record<string, string>

  return await updateLaporan({ id, pelapor, perihal, tempat, pelaksana, sasaran, bentuk_kegiatan, tanggal, waktu, hasil_kegiatan })
}

export async function handleInsertFoto(data: foto) {
  const { laporan_id, file_name, image_url } = data;

  return await insertFoto({ laporan_id, file_name, image_url });
}