import { TracingBeam } from "@ui/tracing-beam";
import Hero from "./hero";
import Experiences from "./experiences";

export default function MainContent() {
  return (
    <TracingBeam className="px-5 md:px-0">
      <div className="antialiased pt-4 relative flex flex-col flex-nowrap gap-28">
        {/* Each child have to have prop key={`content-0`} */}
        <Hero key={"content-0"} />
        <Experiences key={`content-1`} />
      </div>
    </TracingBeam>
  );
}
