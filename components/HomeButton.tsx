"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { LoginIcon } from "@/components/icons";
import { Button } from "@heroui/react";
import LoginModal from "@/components/modals/loginModal";

export default function HomeButton() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount and when modal closes
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user_id"));
  }, [showLogin]);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("nama_depan");
    setIsLoggedIn(false);
    alert("Anda telah keluar.");
  };

  return (
    <>
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
        {isLoggedIn ? (
          <Button
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              className: "bg-white flex items-center gap-2",
            })}
            onPress={handleLogout}
            type="button"
          >
            Keluar
          </Button>
        ) : (
          <Button
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              className: "bg-white flex items-center gap-2",
            })}
            onPress={() => setShowLogin(true)}
            type="button"
          >
            <LoginIcon size={20} />
            Masuk
          </Button>
        )}
      </div>
      <LoginModal
        open={showLogin}
        onClose={() => {
          setShowLogin(false);
          setIsLoggedIn(!!localStorage.getItem("user_id"));
        }}
      />
    </>
  );
}