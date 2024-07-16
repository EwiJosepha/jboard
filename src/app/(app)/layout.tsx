
import NavBar from "@/core/components/organisms/nav";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className=" px-4 py-6 max-w-5xl mx-auto">
        <NavBar />
        {children}
      </main>
    </>
  );
}