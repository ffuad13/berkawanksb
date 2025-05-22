export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SIKAWAN",
  description: "Sistem Informasi Pelaporan Kader Kesehatan Hewan Sumbawa Barat.",
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
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
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
