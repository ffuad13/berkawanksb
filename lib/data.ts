import sql from "@/config/db";
import { LaporanInput } from "@/types/entities";

export async function insertLaporan(data: LaporanInput) {
  const {
    user_id,
    pelapor,
    perihal,
    tempat,
    pelaksana,
    sasaran,
    bentuk_kegiatan,
    tanggal,
    waktu,
  } = data;

  try {
    await sql`
      INSERT INTO laporan (
        user_id,
				pelapor,
        perihal,
        tempat,
        pelaksana,
        sasaran,
        bentuk_kegiatan,
        tanggal,
        waktu
      ) VALUES (
        ${user_id},
        ${pelapor},
        ${perihal},
        ${tempat},
        ${pelaksana},
        ${sasaran},
        ${bentuk_kegiatan},
        ${tanggal},
        ${waktu}
      );
    `;
  } catch (error) {
    console.error("Failed to insert laporan:", error);
    throw error;
  }
}

export async function getAllLaporan() {
  try {
    const results = await sql`
      SELECT * FROM laporan ORDER BY created_at DESC;
    `;

    return results;
  } catch (error) {
    console.error("Error fetching laporan:", error);
    throw error;
  }
}

export async function updateLaporan(data: LaporanInput & { id: string }) {
  const {
    id,
    pelapor,
    perihal,
    tempat,
    pelaksana,
    sasaran,
    bentuk_kegiatan,
    tanggal,
    waktu,
  } = data;

  try {
    await sql`
      UPDATE laporan
      SET
        pelapor = ${pelapor},
        perihal = ${perihal},
        tempat = ${tempat},
        pelaksana = ${pelaksana},
        sasaran = ${sasaran},
        bentuk_kegiatan = ${bentuk_kegiatan},
        tanggal = ${tanggal},
        waktu = ${waktu}
      WHERE id = ${id};
    `;
  } catch (error) {
    console.error("Failed to update laporan:", error);
    throw error;
  }
}
