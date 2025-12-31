import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="pt-16 pl-64">
        <div className="p-6">{children}</div>
      </main>
    </>
  );
}
