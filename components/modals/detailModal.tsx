import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Divider, Button } from "@heroui/react";
import { DetailModalProps } from "@/types/entities";
import { formatDateToLocal } from "@/lib/uitls";
import FotoGallery from '@/components/FotoGallery'

// Helper component for info items
function InfoItem({ label, value }: { label: string; value?: string }) {
  return (
    <div className="p-2 bg-gray-50 rounded">
      <span className="font-semibold">{label}</span>
      <span className="block text-xs text-gray-500">{value}</span>
    </div>
  );
}

export default function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  if (!data) return null;

  const timeDate = formatDateToLocal(data.tanggal, data.waktu).split("pukul");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">Detail Laporan</ModalHeader>
        <ModalBody>
          <Card shadow="sm" className="w-full">
            <CardBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InfoItem label="Perihal" value={data.perihal} />
                <InfoItem label="Tempat" value={data.tempat} />
                <InfoItem label="Pelapor" value={data.pelapor} />
                <InfoItem label="Status" value={data.status} />
                <InfoItem label="Waktu" value={timeDate[1] || "00:00"} />
                <InfoItem label="Tanggal" value={timeDate[0] || "Tanggal tidak tersedia"} />
                <InfoItem label="Pelaksana" value={data.pelaksana ?? ""} />
                <InfoItem label="Sasaran" value={data.sasaran ?? ""} />
                <InfoItem label="Bentuk Kegiatan" value={data.bentuk_kegiatan ?? ""} />
              </div>
              <div className="bg-gray-50 rounded my-4">
                <InfoItem label="Hasil" value={data.hasilYangDicapai}/>
              </div>
              <Divider className="my-4" />
              <FotoGallery laporan_id={data.id}/>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onPress={onClose}>
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
