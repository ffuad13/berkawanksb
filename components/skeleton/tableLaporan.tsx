"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@heroui/react";

import { columns } from "@/components/laporanClient";

export default function SkeletonTableLaporan() {
  return (
    <Table aria-label="Skeleton data laporan">
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
      <TableBody>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <TableRow key={`skeleton-${rowIndex}`}>
            {columns.map((col) => (
              <TableCell
                key={col.key}
                className="text-xs sm:text-xs max-w-[200px] truncate sm:whitespace-normal"
              >
                <Skeleton className="rounded-lg">
                  <div className="h-3 w-24 bg-default-200" />
                </Skeleton>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
