import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";

type Laporan = {
  perihal: string;
  tempat: string;
  pelapor: string;
  status: string;
  tanggal: string;
  waktu?: string;
  pelaksana?: string[];
  sasaran?: string;
  bentuk_kegiatan?: string;
  hasilYangDicapai?: string;
};

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: Laporan | null;
};

export default function DetailModal({
  isOpen,
  onClose,
  data,
}: DetailModalProps) {
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Detail Laporan
        </ModalHeader>
        <ModalBody>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Perihal:</strong> {data.perihal}
            </p>
            <p>
              <strong>Tempat:</strong> {data.tempat}
            </p>
            <p>
              <strong>Pelapor:</strong> {data.pelapor}
            </p>
            <p>
              <strong>Status:</strong> {data.status}
            </p>
            <p>
              <strong>Hari:</strong> {data.waktu}
            </p>
            <p>
              <strong>Tanggal:</strong> {data.tanggal}
            </p>
            <p>
              <strong>Pelaksana:</strong> {data.pelaksana}
            </p>
            <p>
              <strong>Sasaran:</strong> {data.sasaran}
            </p>
            <p>
              <strong>Bentuk Kegiatan:</strong> {data.bentuk_kegiatan}
            </p>
            <p>
              <strong>Hasil:</strong> {data.hasilYangDicapai}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Tutup
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
