"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Form } from "@heroui/react";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Gagal menghubungi server");
      }

      const data = await res.json();

      if (data && data.id && data.nama_depan) {
        localStorage.setItem("user_id", data.id);
        localStorage.setItem("nama_depan", data.nama_depan);
        setResultMsg("Login berhasil!");
        setShowResult(true);
        setTimeout(() => {
          setShowResult(false);
          onClose();
        }, 2000);
      } else {
        setResultMsg(data?.message || "Login gagal. Email atau password salah.");
        setShowResult(true);
        setTimeout(() => setShowResult(false), 2000);
      }
    } catch (err) {
      setResultMsg("Terjadi kesalahan saat login.");
      setShowResult(true);
      setTimeout(() => setShowResult(false), 2000);
    }
  };

  return (
    <Modal isOpen={open} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              label="Email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <Input
              type="password"
              label="Password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <Button type="submit" color="primary" className="w-full" isDisabled={showResult}>
              Login
            </Button>
          </Form>
          {showResult && <div className="mt-4 text-center text-sm text-gray-700">{resultMsg}</div>}
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose} className="w-full text-red-600">
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
