import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-full">
      <main className="flex flex-col md:flex-row items-center justify-center text-center md:gap-x-0 lg:gap-x-0 px-6">
        <div className="ml-6 relative -top-12">
          <Heading />
        </div>
        <Heros />
      </main>
      <Footer />
    </div>
  );
}
