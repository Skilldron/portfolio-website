import selfieImgUrl from "@/assets/selfie.jpg";
import { AspectRatio } from "@ui/aspect-ratio";
import { Boxes } from "@ui/background-boxes";
import { Github, Linkedin } from "lucide-react";
import Section from "@ui/section";
import DailyDevIcon from "../ui/dailydev-icon";
import LineSvg from "../ui/line-svg";
import LineFireSvg from "../ui/line-fire-svg";

function PresentationCard() {
  return (
    <Section className="flex flex-col items-center shadow-2xl justify-center mt-10 xl:m-0 left-0 self-center xl:self-start rounded-lg xl:sticky xl:top-[40px] h-1/3 w-full xl:w-auto xl:max-w-2xl bg-card dark:bg-white z-10 relative overflow-hidden">
      <div className="absolute h-[350px] sm:h-96 -top-20 w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <Boxes />
      </div>
      <LineSvg className="absolute -right-10 sm:-right-20 -bottom-5 sm:-bottom-10 w-40 sm:w-52 -z-10 rotate-180 fill-primary" />
      <LineFireSvg className="absolute -left-24 bottom-36 w-40 sm:w-52 -z-10 fill-primary" />
      <div className="flex flex-col content-between items-center py-10 px-7 text-card-foreground">
        <div className="w-10/12 self-center pb-3 xl:pb-5">
          <AspectRatio ratio={3.5 / 4} className="bg-muted rounded-xl">
            <img
              src={selfieImgUrl}
              role="presentation"
              loading="lazy"
              alt="Photo portrait Harold Delory"
              className="h-full w-full rounded-md object-cover object-top"
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col items-center text-center flex-nowrap gap-10 xl:gap-20">
          <div>
            <h1 className="text-4xl font-bold dark:text-accent">
              Harold delory
            </h1>
            <span className="font-bold dark:text-accent">
              Développeur full-stack
            </span>
          </div>
          <div className="max-w-80 gap-10 flex flex-col items-center">
            <p className="text-accent dark:text-muted">
              Un développeur qui aime découvrir et apprendre de nouvelles choses
              !
            </p>
            <div className="flex flex-row flex-nowrap gap-5">
              <a href="https://github.com/Skilldron">
                <Github
                  width={30}
                  className="stroke-primary dark:stroke-[#FF7900]"
                />
              </a>
              <a href="https://www.linkedin.com/in/harold-delory/">
                <Linkedin
                  width={30}
                  className="stroke-primary dark:stroke-[#FF7900]"
                />
              </a>
              <a href="https://app.daily.dev/pawn">
                <DailyDevIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PresentationCard;
