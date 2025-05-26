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
};

export type Laporan = Partial<LaporanBase> & {
  id: string;
  perihal: string;
  tempat: string;
  pelapor: string;
  status: string;
  tanggal: string;
  hasilYangDicapai?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Laporan | null;
};

export type DetailModalProps = ModalProps;
export type EditModalProps = ModalProps;