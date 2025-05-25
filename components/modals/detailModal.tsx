import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

import { DetailModalProps } from "@/types/entities";
import { formatDateToLocal } from "@/lib/uitls";

export default function DetailModal({
  isOpen,
  onClose,
  data,
}: DetailModalProps) {
  if (!data) return null;

  const timeDate = formatDateToLocal(data.tanggal, data.waktu).split("pukul");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
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
              <strong>Waktu:</strong> {timeDate[1] || "00:00"}
            </p>
            <p>
              <strong>Tanggal:</strong>{" "}
              {timeDate[0] || "Tanggal tidak tersedia"}
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
