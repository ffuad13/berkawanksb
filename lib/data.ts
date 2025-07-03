import sql from "@/config/db";
import { foto, LaporanInput, LaporanUpdate } from "@/types/entities";

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
    throw new Error("Failed to get laporan", { cause: e });
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
    hasil_kegiatan
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
        waktu = ${waktu},
        hasil_kegiatan = ${hasil_kegiatan}
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

export async function insertFoto(data: foto) {
  const {
    laporan_id,
    file_name,
    image_url
  } = data;

  try {
    await sql`
      INSERT INTO foto (
        laporan_id,
        file_name,
				image_url
      ) VALUES (
        ${laporan_id},
        ${file_name},
        ${image_url}
      );
    `;
  } catch (e) {
    throw new Error("Failed to insert foto", { cause: e });
  }
}

export async function getFotoByLaporanId(laporan_id: string) {
  try {

    const result = await sql`
    SELECT * FROM foto
    WHERE laporan_id = ${laporan_id}
    `;

    return result
  } catch (e) {
    throw new Error("Failed to get user", { cause: e });
  }
}