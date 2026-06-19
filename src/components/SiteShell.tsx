import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
