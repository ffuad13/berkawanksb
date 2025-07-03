"use client"

import React from "react";
import { Card, CardBody, Modal, ModalContent, ModalBody, Image } from "@heroui/react";

export default function FotoGallery({ laporan_id }: { laporan_id: string }) {
  const [fotos, setFotos] = React.useState<{ image_url: string }[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (laporan_id) {
      fetch(`/api/laporan/foto/${laporan_id}`)
        .then((res) => res.json())
        .then((result) => setFotos(result || []));
    }
  }, [laporan_id]);

  const handleOpen = (url: string) => {
    setSelected(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="p-2 bg-gray-50 rounded mb-4">
      {/* <span className="font-semibold block mb-2">Foto Kegiatan</span> */}
      <div className="flex gap-2 flex-wrap">
        {fotos.length === 0 && (
          <span className="text-xs text-gray-400">Belum ada foto kegiatan</span>
        )}
        {fotos.map((foto, idx) => (
          <Card
            key={idx}
            isPressable
            className="w-20 h-20 overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition"
            onPress={() => handleOpen(foto.image_url)}
          >
            <CardBody className="p-0">
              <Image
                src={foto.image_url}
                alt={`Foto Kegiatan ${idx + 1}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
                radius="sm"
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <Modal isOpen={open} onClose={handleClose} size="lg">
        <ModalContent>
          <ModalBody className="flex justify-center items-center bg-black">
            {selected && (
              <Image
                src={selected}
                alt="Foto Kegiatan Full"
                width={600}
                height={600}
                className="object-contain max-h-[80vh] max-w-full rounded"
                radius="md"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}