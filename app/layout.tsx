import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for the e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInFallbackRedirectUrl="/" signUpFallbackRedirectUrl="/">
      <html lang="en">
        <body>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
