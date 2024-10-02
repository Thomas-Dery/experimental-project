import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default AppLayout;
