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
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("nama_depan");
    setIsLoggedIn(!!name);
    setUserName(name);
  }, [showLogin]);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("nama_depan");
    setIsLoggedIn(false);
    setUserName(null);
    alert("Anda telah keluar.");
  };

  return (
    <>
      <div className="flex flex-col items-center mb-4">
        {isLoggedIn && <h3 className="text-lg font-semibold text-center mb-2 text-stone-50">Selamat datang, {userName}.</h3>}
        <div className="flex gap-3">
          <Link
            className={`${buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })} text-white`}
            href={siteConfig.navMenuItems[0].href}
          >
            Buat Laporan
          </Link>
          {isLoggedIn ? (
            <Button
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                className: "bg-white flex items-center gap-2 text-danger-700",
              })}
              onPress={handleLogout}
              type="button"
            >
              Logout
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
              Login
            </Button>
          )}
        </div>
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
