import "./globals.scss";
import Layout from "@/components/layout/layout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <div className="mx-auto">{children}</div>
        </Layout>
      </body>
    </html>
  );
}
