import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { LoginIcon } from "@/components/icons";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 min-h-screen w-full absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/roo.webp")' }}
    >
      <div className="inline-block max-w-3xl text-center justify-center z-10 bg-background/70 p-8 rounded-xl backdrop-blur-md shadow-lg">
        <span className={title()}>Sistem Informasi&nbsp;</span>
        <br />
        <span className={title()}>Kader Kesehatan Hewan</span>
        <br />
        <span className={title({ color: "violet" })}>(SIKAWAN)&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          Optimalisasi Pelayanan Kesehatan Hewan Berbasis Masyarakat Kabupaten
          Sumbawa Barat
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.navMenuItems[0].href}
        >
          Buat Laporan
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <LoginIcon size={20} />
          Masuk
        </Link>
      </div>
    </section>
  );
}
