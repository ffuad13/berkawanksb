"use client";

import React from "react";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { DatePicker } from "@heroui/date-picker";
import { TimeInput } from "@heroui/date-input";

import { ClockCircleLinearIcon } from "./icons";

import { handleInsertLaporan } from "@/actions/laporan";

export default function FormLapor() {
  const [action, setAction] = React.useState("");
  const [isPending, startTransition] = React.useTransition();

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 my-4"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        formData.set("user_id", "95a97aac-a679-4123-878a-e947deb878ab");
        formData.set("pelapor", "Marisol");

        startTransition(async () => {
          try {
            await handleInsertLaporan(formData);

            setAction(`Laporan terkirim`);
          } catch (e) {
            setAction("Gagal mengirim laporan.");
          }
        });
      }}
    >
      <Input
        errorMessage="Silakan isi perihal"
        label="Perihal"
        labelPlacement="outside"
        name="perihal"
        type="text"
      />

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

      <Input
        errorMessage="Silakan isi tempat"
        label="Tempat"
        labelPlacement="outside"
        name="tempat"
        type="text"
      />

      <Input
        errorMessage="Silakan isi pelaksana"
        label="Pelaksana"
        labelPlacement="outside"
        name="pelaksana"
        type="text"
      />

      <Input
        errorMessage="Silakan isi sasaran"
        label="Sasaran"
        labelPlacement="outside"
        name="sasaran"
        type="text"
      />

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

      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}
