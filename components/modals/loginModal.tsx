"use client"

import React, { useState } from "react";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // password is still collected, but not sent
  const [showResult, setShowResult] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Gagal menghubungi server");
      }

      const data = await res.json();

      if (data && data.id && data.nama_depan) {
        // Store to localStorage
        localStorage.setItem("user_id", data.id);
        localStorage.setItem("nama_depan", data.nama_depan);
        setResultMsg("Login berhasil!");
        setShowResult(true);
        setTimeout(() => {
          setShowResult(false);
          onClose();
        }, 1000);
      } else {
        setResultMsg("Login gagal. Email tidak ditemukan.");
        setShowResult(true);
        setTimeout(() => setShowResult(false), 1000);
      }
    } catch (err) {
      setResultMsg("Terjadi kesalahan saat login.");
      setShowResult(true);
      setTimeout(() => setShowResult(false), 1000);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8 shadow-lg min-w-[320px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
            disabled={showResult}
          >
            Login
          </button>
        </form>
        {showResult && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg min-w-[220px] text-center">
              <span>{resultMsg}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}