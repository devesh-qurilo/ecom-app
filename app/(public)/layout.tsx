import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border">
      <Navbar />
      <main className=" mx-auto px-4 mt-20 ">{children}</main>
      <Footer />
    </div>
  );
}
