export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BERKAWAN - Basis Elektronik Kader Kesehatan Hewan",
  description:
    "Basis Elektronik Kader Kesehatan Hewan Kabupaten Sumbawa Barat.",
  navItems: [
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
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
  },
};
