"use client";

import React from "react";
import { Form, Input, Textarea, DatePicker, TimeInput, Button } from "@heroui/react";
import { Time, parseDate } from "@internationalized/date";
import { useRouter } from "next/navigation";

import { Laporan } from "@/types/entities";
import { handleUpdateLaporan } from "@/actions/laporan";
import { ClockCircleLinearIcon } from "./icons";
import UploadImage from '@/components/uploadImage'

export default function FormLaporEdit(data: Laporan) {
	const [isPending, startTransition] = React.useTransition();
	const router = useRouter();

	const [hour, minute] = (data.waktu?.split(":") ?? ["0", "0"]);

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 my-4"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        formData.set("id", data.id);
        formData.set("pelapor", data.pelapor);

        startTransition(async () => {
          try {
            await handleUpdateLaporan(formData);
            router.push("/laporan");
          } catch {
            alert("Gagal mengirim laporan. Silakan coba lagi.");
          }
        });
      }}
    >
      <Input defaultValue={data.perihal} label="Perihal" labelPlacement="outside" name="perihal" type="text" />

      <Input defaultValue={data.tempat} label="Tempat" labelPlacement="outside" name="tempat" type="text" />

      <div className="flex gap-4">
        <TimeInput
          className="flex-1"
          hourCycle={24}
          label="Waktu"
          name="waktu"
          defaultValue={new Time(parseInt(hour), parseInt(minute))}
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

      <Input defaultValue={data.pelaksana} label="Pelaksana" labelPlacement="outside" name="pelaksana" type="text" />

      <Input defaultValue={data.sasaran} label="Sasaran" labelPlacement="outside" name="sasaran" type="text" />

      <div>
        <UploadImage/>
      </div>

      <Textarea
        defaultValue={data.bentuk_kegiatan}
        label="Bentuk Kegiatan"
        labelPlacement="outside"
        name="bentuk_kegiatan"
        placeholder="Jelaskan bentuk kegiatan"
      />
      <div className="flex gap-2">
        <Button className="mr-2" color="primary" type="submit" isLoading={isPending}>
          Simpan
        </Button>
      </div>
    </Form>
  );
}
