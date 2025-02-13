import PresentationCard from "@features/presentation_card";
import MainContent from "@features/main_content";
import { ModeToggle } from "@ui/mode-toggle";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

const Contact = lazy(() => import("@features/contact"));
function App() {
  return (
    <>
      <div className="flex justify-end pr-10 py-3">
        <ModeToggle />
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-20 mb-32 items-start mx-5 lg:mx-20 xl:mx-0 xl:w-auto">
        <PresentationCard />
        <div className="max-w-md xs:max-w-xl md:max-w-2xl text-center xl:text-start self-center">
          <MainContent />
        </div>
      </div>
      <Suspense fallback={<>Loading...</>}>
        <Contact />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
