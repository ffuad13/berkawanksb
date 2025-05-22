"use client";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { Chip } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";
import { EyeIcon, EditIcon, DeleteIcon } from "@/components/icons";
import DetailModal from "@/components/detailModal";

/* const rows = [
  {
    key: "1",
    perihal: "Vaksinasi HPR",
    waktu: {
      hari: "Kamis",
      tanggal: "24 April 2025",
      pukul: "09.00 Wita",
    },
    tempat: "Kelurahan Menala",
    pelaksana: ["Keswan Kec.Taliwang", "Bhabinkamtibmas"],
    sasaran: "Pemilik Hewan Peliharaan",
    bentukKegiatan: `bhaboin`,
    hasilYangDicapai: "Giat berjalan aman dan lancar",
    pelapor: "Marisol",
    status: "aktif",
  },
  {
    key: "2",
    perihal: "Vaksinasi HPR",
    waktu: {
      hari: "Kamis",
      tanggal: "24 April 2025",
      pukul: "09.00 Wita",
    },
    tempat: "Kelurahan Menala",
    pelaksana: ["Keswan Kec.Taliwang", "Bhabinkamtibmas"],
    sasaran: "Pemilik Hewan Peliharaan",
    bentukKegiatan: `Bhabinkamtibmas Kelurahan Menala mendampingi Kegiatan dari Dinas Keswan Kec. Taliwang melakukan kegiatan Vaksinasi Hewan Peliharaan Seperti Anjing, dan Kucing.
Vaksinasi kucing adalah proses pemberian vaksin untuk meningkatkan kekebalan tubuh kucing terhadap penyakit tertentu. Vaksinasi ini penting untuk melindungi kucing dari berbagai penyakit berbahaya, termasuk penyakit yang dapat menular ke manusia. Kegiatan Vaksinasi ini di laksanakan 2 hari di Kelurahan Menala, bertempat di Lingk. batu Ble Balisung & Lingkungan Menala Baru.`,
    hasilYangDicapai: "Giat berjalan aman dan lancar",
    pelapor: "Marisol",
    status: "selesai",
  },
]; */


const columns = [
  {
    key: "perihal",
    label: "Perihal",
  },
  {
    key: "pelapor",
    label: "Pelapor",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
    label: "Tindakan",
  },
];

const statusColorMap: Record<"selesai" | "aktif" | "vacation", "success" | "danger" | "warning"> = {
  selesai: "success",
  aktif: "danger",
  vacation: "warning",
};

export default function Laporan() {
  const [rows, setRows] = React.useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/laporan');
        const data = await res.json();
        setRows(data)
      } catch (err) {
        console.error('Error fetching laporan:', err);
      }
    }

    fetchData();
  }, []);

  const openModal = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const renderCell = React.useCallback((laporan: { [x: string]: any }, columnKey: string | number) => {
    const cellValue = laporan[columnKey];

    switch (columnKey) {
      case "perihal":
        return (
          <div className="flex flex-col">
            <p className="text-sm">{cellValue}</p>
          </div>
        );
      case "pelapor":
        return (
          <div className="flex flex-col">
            <p className="text-sm">{cellValue}</p>
          </div>
        );
      case "status":
        const status = cellValue as string;
        const color = statusColorMap[status as keyof typeof statusColorMap] ?? "default";
        return (
          <Chip color={color} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Detail">
              <span
                onClick={() => openModal(laporan)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Ubah">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Hapus">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
      <div>
        <Table aria-label="Tabel data laporan">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                align={column.key === "actions" ? "center" : "start"}
                className="whitespace-nowrap text-xs sm:text-sm"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent={"Tidak ada data ditampilkan"}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell className="text-xs sm:text-xs max-w-[200px] truncate sm:whitespace-normal">
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DetailModal isOpen={isModalOpen} onClose={closeModal} data={selectedRow} />
      </div>
  );
}
