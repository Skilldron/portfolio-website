import { TracingBeam } from "@ui/tracing-beam";
import Hero from "./hero";
import Experiences from "./experiences";
import Projects from "./projects";

export default function MainContent() {
  return (
    <TracingBeam className="px-5 md:px-0">
      <div className="antialiased pt-4 relative flex text-wrap flex-col gap-28">
        {/* Each child have to have prop key={`content-0`} */}
        <Hero key={"content-0"} />
        <Experiences key={"content-1"} />
        <Projects key={"content-2"} />
      </div>
    </TracingBeam>
  );
}
