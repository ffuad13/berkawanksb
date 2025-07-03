export type LaporanBase = {
  perihal: string;
  tempat: string;
  pelapor: string;
  tanggal: string;
  waktu: string;
  pelaksana: string;
  sasaran: string;
  bentuk_kegiatan: string;
};

export type LaporanInput = LaporanBase & {
  user_id: string;
};

export type LaporanUpdate = LaporanBase & {
  id: string;
  hasil_kegiatan: string;
};

export type Laporan = Partial<LaporanBase> & {
  id: string;
  user_id?: string
  perihal: string;
  tempat: string;
  pelapor: string;
  status: string;
  tanggal: string;
  hasil_kegiatan?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Laporan | null;
};

export type DetailModalProps = ModalProps;
export type EditModalProps = ModalProps;

export type User = {
  id: string;
  nama_depan: string | null;
  nama_belakang: string | null;
  email: string;
  password: string;
  is_admin: boolean;
  role: string;
  wilayah_kerja: string | null;
  created_at: Date;
  updated_at: Date;
}

export type foto = {
  id?: string
  laporan_id: string
  file_name: string
  image_url: string
}