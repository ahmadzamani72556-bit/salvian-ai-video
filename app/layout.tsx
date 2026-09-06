import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Salvian AI Video",
  description: "AI YouTube Video Generator",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <AppShell>{children}</AppShell>;
}