import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";

import FormLaporEdit from "@/components/formLaporEdit";
import { EditModalProps } from "@/types/entities";

export default function EditModal({ isOpen, onClose, data }: EditModalProps) {
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">Ubah Laporan</ModalHeader>
        <ModalBody>
          <FormLaporEdit {...data} />
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
