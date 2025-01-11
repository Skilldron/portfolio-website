import PresentationCard from "@features/presentation_card";
import CalendarFloatingButton from "@features/calendar_button";
import MainContent from "@features/main_content";
import { ModeToggle } from "@ui/mode-toggle";

function App() {
  return (
    <>
      <CalendarFloatingButton />
      <ModeToggle />
      <div className="flex flex-col xl:flex-row justify-center gap-20 mb-32 items-start mx-5 lg:mx-20 xl:mx-0 xl:w-auto">
        <PresentationCard />
        <div className="max-w-md xs:max-w-xl md:max-w-2xl text-center xl:text-start self-center">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default App;
