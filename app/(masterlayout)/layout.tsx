import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen ">
        <Navbar />
        <main className="p-4">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
