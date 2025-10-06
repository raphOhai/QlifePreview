
import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { RootLayout } from "@/components/RootLayout";

export const metadata: Metadata = {
  title: "Qlife App",
  description: "Next.js app with Tailwind CSS, React Query, and shadcn/ui",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>
          <RootLayout>{children}</RootLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
