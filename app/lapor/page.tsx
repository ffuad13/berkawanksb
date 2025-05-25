import { title } from "@/components/primitives";
import FormLapor from "@/components/formLapor";

export default function LaporPage() {
  return (
    <div>
      <h1 className={title()}>Buat Laporan</h1>
      <br />
      <FormLapor />
    </div>
  );
}
