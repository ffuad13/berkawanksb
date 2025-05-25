import { Suspense } from "react";

import SkeletonTableLaporan from "@/components/skeleton/tableLaporan";
import Laporan from "@/components/laporan";
import { title } from "@/components/primitives";

export default function LaporanPage() {
  return (
    <div>
      <h1 className={title()}>Laporan Kegiatan</h1>
      <Suspense fallback={<SkeletonTableLaporan />}>
        <Laporan />
      </Suspense>
    </div>
  );
}
