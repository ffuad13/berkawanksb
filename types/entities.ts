export type LaporanInput = {
  user_id: string;
  pelapor: string;
  perihal: string;
  tempat: string;
  pelaksana: string;
  sasaran: string;
  bentuk_kegiatan: string;
  tanggal: string;
  waktu: string;
};

export type Laporan = {
  id: string;
  perihal: string;
  tempat: string;
  pelapor: string;
  status: string;
  tanggal: string;
  waktu?: string;
  pelaksana?: string;
  sasaran?: string;
  bentuk_kegiatan?: string;
  hasilYangDicapai?: string;
};

export type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Laporan | null;
};
