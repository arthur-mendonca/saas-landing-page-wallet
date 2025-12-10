import { Features } from "./components/ui/Features";
import { GlobalLayout } from "./components/ui/GlobalLayout";
import { Header } from "./components/ui/Header";
import { Logos } from "./components/ui/Logos";
import { ProductImage } from "./components/ui/ProductImage";
import { TopBar } from "./components/ui/TopBar";
import { UserFeedback } from "./components/ui/UserFeedback";
import { CTA } from "./components/ui/CTA";
import { Footer } from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-(--color-mint-500)/58">
      <main className="flex min-h-screen w-full">
        <GlobalLayout>
          <TopBar />
          <Header />
          <Logos />
          <ProductImage />
          <Features />
          <UserFeedback />
          <CTA />
          <Footer />
        </GlobalLayout>
      </main>
    </div>
  );
}
