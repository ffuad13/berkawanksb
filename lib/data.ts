import sql from "@/config/db";
import { LaporanInput, LaporanUpdate } from "@/types/entities";

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
  } catch (e) {
    throw new Error("Failed to insert laporan", { cause: e });
  }
}

export async function getAllLaporan() {
  try {
    const results = await sql`
      SELECT * FROM laporan ORDER BY created_at DESC;
    `;

    return results;
  } catch (e) {
    throw new Error("Failed to insert laporan", { cause: e });
  }
}

export async function updateLaporan(data: LaporanUpdate) {
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
  } catch (e) {
    throw new Error("Failed to update laporan", { cause: e });
  }
}

export async function getUser(email: string) {
  try {

    const result = await sql`
    SELECT * FROM userbkwn
    WHERE email = ${email}
    LIMIT 1;
    `;

    return result[0]
  } catch (e) {
    throw new Error("Failed to get user", { cause: e });
  }
}