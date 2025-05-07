import "@/styles/globals.scss";
import { Toaster } from "sonner";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Snaplet</title>
      </head>
      <body>
        <Layout>
          <Toaster richColors position="bottom-right" />
          <div className="mx-auto">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
