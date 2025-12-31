import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "ECOM App",
  description: "Amazon / Flipkart style e-commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
