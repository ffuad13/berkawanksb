import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Textarea,
  Button,
  DatePicker,
  TimeInput,
} from "@heroui/react";
import {Time, parseDate} from '@internationalized/date';

import { ClockCircleLinearIcon } from "@/components/icons";
import { Laporan } from "@/types/entities";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Laporan | null;
}

export default function EditModal({ isOpen, onClose, data }: EditModalProps) {
  if (!data) return null;
  const waktu = data.waktu?.split(":");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Edit Laporan
        </ModalHeader>
        <ModalBody>
          <Form className="w-full max-w-xs flex flex-col gap-4 my-4">
            <Input
              defaultValue={data.perihal}
              label="Perihal"
              labelPlacement="outside"
              name="perihal"
              type="text"
            />

            <Input
              defaultValue={data.tempat}
              label="Tempat"
              labelPlacement="outside"
              name="tempat"
              type="text"
            />

            <div className="flex gap-4">
              <TimeInput
                className="flex-1"
                hourCycle={24}
                label="Waktu"
                name="waktu"
                defaultValue={new Time(parseInt(waktu?.[0] || "0"), parseInt(waktu?.[1] || "0"))}
                startContent={
                  <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <DatePicker
                className="flex-1"
                label="Tanggal"
                name="tanggal"
                defaultValue={parseDate(data.tanggal.split("T")[0]) as any}
              />
            </div>

            <Input
              defaultValue={data.pelaksana}
              label="Pelaksana"
              labelPlacement="outside"
              name="pelaksana"
              type="text"
            />

            <Input
              defaultValue={data.sasaran}
              label="Sasaran"
              labelPlacement="outside"
              name="sasaran"
              type="text"
            />

            <Textarea
              defaultValue={data.bentuk_kegiatan}
              label="Bentuk Kegiatan"
              labelPlacement="outside"
              name="bentuk_kegiatan"
              placeholder="Jelaskan bentuk kegiatan"
            />
            <div className="flex gap-2">
              <Button className="mr-2" color="primary">
                Simpan
              </Button>
              <Button variant="flat" onClick={onClose}>
                Batal
              </Button>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
