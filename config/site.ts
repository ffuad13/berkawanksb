export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SIKAWAN - Sistem Informasi Kader Kesehatan Hewan",
  description:
    "Sistem Informasi Pelaporan Kader Kesehatan Hewan Sumbawa Barat.",
  navItems: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Lihat Laporan",
      href: "/laporan",
    },
  ],
  navMenuItems: [
    {
      label: "Buat Laporan",
      href: "/lapor",
    },
    {
      label: "Lihat Laporan",
      href: "/laporan",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
  },
};
