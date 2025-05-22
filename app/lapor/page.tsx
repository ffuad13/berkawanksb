import { title } from "@/components/primitives";
import FormLapor from "@/components/formLapor";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Buat Laporan</h1>
      <br />
      <FormLapor />
    </div>
  );
}
