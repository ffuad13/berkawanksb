"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  Input,
  Textarea,
  Button,
  DatePicker,
  TimeInput,
} from "@heroui/react";

import { ClockCircleLinearIcon } from "./icons";

import { handleInsertLaporan } from "@/actions/laporan";

export default function FormLapor() {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 my-4"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        formData.set("user_id", "95a97aac-a679-4123-878a-e947deb878ab");
        formData.set("pelapor", "Marisol");

        startTransition(async () => {
          try {
            await handleInsertLaporan(formData);
            router.push("/laporan");
          } catch {
            alert("Gagal mengirim laporan. Silakan coba lagi.");
          }
        });
      }}
    >
      <Input errorMessage="Silakan isi perihal" label="Perihal" labelPlacement="outside" name="perihal" type="text" />

      <div className="flex gap-4">
        <TimeInput
          className="flex-1"
          hourCycle={24}
          label="Waktu"
          name="waktu"
          startContent={
            <ClockCircleLinearIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <DatePicker className="flex-1" label="Tanggal" name="tanggal" />
      </div>

      <Input errorMessage="Silakan isi tempat" label="Tempat" labelPlacement="outside" name="tempat" type="text" />

      <Input
        errorMessage="Silakan isi pelaksana"
        label="Pelaksana"
        labelPlacement="outside"
        name="pelaksana"
        type="text"
      />

      <Input errorMessage="Silakan isi sasaran" label="Sasaran" labelPlacement="outside" name="sasaran" type="text" />

      <Textarea
        isClearable
        errorMessage="Silakan isi bentuk kegiatan"
        label="Bentuk Kegiatan"
        labelPlacement="outside"
        name="bentuk_kegiatan"
        placeholder="Jelaskan bentuk kegiatan"
      />

      <div className="flex gap-2">
        <Button color="primary" isLoading={isPending} type="submit">
          Kirim
        </Button>
        <Button type="reset" variant="flat">
          Batal
        </Button>
      </div>
    </Form>
  );
}
