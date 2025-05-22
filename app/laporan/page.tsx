import Laporan from "@/components/laporan";
import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Laporan Kegiatan</h1>
      <Laporan/>
    </div>
  );
}
