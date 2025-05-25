"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@heroui/react";

import { EyeIcon, EditIcon, DeleteIcon } from "@/components/icons";
import DetailModal from "@/components/modals/detailModal";
import EditModal from "@/components/modals/editModal";
import { Laporan } from "@/types/entities";

export const columns = [
  { key: "perihal", label: "Perihal" },
  { key: "pelapor", label: "Pelapor" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Tindakan" },
];

const statusColorMap: Record<
  "selesai" | "aktif" | "vacation",
  "success" | "danger" | "warning"
> = {
  selesai: "success",
  aktif: "danger",
  vacation: "warning",
};

interface LaporanClientProps {
  data: Laporan[];
}

export default function LaporanClient({ data }: LaporanClientProps) {
  const [selectedRow, setSelectedRow] = React.useState<Laporan | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const openModal = (row: Laporan) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const openEditModal = (row: Laporan) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  const renderCell = React.useCallback(
    (laporan: Laporan, columnKey: string | number) => {
      const cellValue = laporan[columnKey as keyof Laporan];

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
          const color =
            statusColorMap[status as keyof typeof statusColorMap] ?? "default";

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
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(laporan)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(laporan);
                    }
                  }}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Ubah">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  role="button"
                  tabIndex={0}
                  onClick={() => openEditModal(laporan)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openEditModal(laporan);
                    }
                  }}
                >
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
    },
    [],
  );

  return (
    <div className="mt-4">
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
        <TableBody emptyContent={"Tidak ada data ditampilkan"} items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="text-xs sm:text-xs max-w-[200px] truncate sm:whitespace-normal">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DetailModal
        data={selectedRow}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <EditModal
        data={selectedRow}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
      />
    </div>
  );
}
