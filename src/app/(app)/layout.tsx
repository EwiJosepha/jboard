
import Footer from "@/core/components/organisms/footer";
import NavBar from "@/core/components/organisms/nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container">
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
}