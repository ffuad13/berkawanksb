"use client"

import React, { useState } from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { subtitle, quotedText } from "@/components/primitives";
import { LoginIcon, WavesSeparator } from "@/components/icons";
import HomeAccord from "@/components/homeAccord";
import {Button} from '@heroui/react'
import LoginModal from "@/components/modals/loginModal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main
      className="flex flex-col min-h-screen w-full bg-cover bg-center bg-fixed absolute inset-0"
      style={{ backgroundImage: 'url("/images/livestock.webp")' }}
    >
      <section className="relative flex flex-col items-center justify-center gap-4 min-h-screen w-full ">
        <div className="inline-block max-w-3xl text-center justify-center z-10 bg-background/70 p-8 rounded-xl backdrop-blur-md shadow-lg">
          <div className={subtitle({ class: "mt-4 font-bold" })}>
            Optimalisasi Pelayanan Kesehatan Hewan Berbasis Masyarakat Kabupaten Sumbawa Barat
          </div>
          <div className={quotedText({ class: "mt-4" })}>
            &#34;Bersama Kader Wujudkan
            <br />
            Kesehatan Hewan&#34;
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
          <Button
            className={buttonStyles({ variant: "bordered", radius: "full", className: "bg-white flex items-center gap-2" })}
            onPress={() => setShowLogin(true)}
            type="button">
            <LoginIcon size={20} />
            Masuk
          </Button>
        </div>
      </section>

      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />

      <div className="relative w-full h-[150px]">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <WavesSeparator />
        </div>
      </div>

      <section className="realtive w-full bg-background py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <HomeAccord />
        </div>
      </section>
    </main>
  );
}
