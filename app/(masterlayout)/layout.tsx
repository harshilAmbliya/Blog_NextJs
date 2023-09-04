import CustomLayout from "@/Layout/CustomLayout";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CustomLayout>
      {children}
    </CustomLayout>
  );
};

export default Layout;
