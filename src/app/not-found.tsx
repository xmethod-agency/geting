import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[60dvh] pt-[72px]">
        <div className="container-wide text-center">
          <p className="font-mono text-8xl text-white/5 tracking-tighter mb-4">404</p>
          <h1 className="text-headline text-white -mt-12">Page not found.</h1>
          <p className="mt-3 text-sm text-stone">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 mt-8 text-[13px] font-medium tracking-wide uppercase bg-lime text-void rounded-sm transition-all hover:bg-lime-deep"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
