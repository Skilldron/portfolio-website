import selfieImgUrl from "@/assets/selfie.jpg";
import LineFireimgUrl from "@/assets/line_fire.svg";
import LineimgUrl from "@/assets/line.svg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Boxes } from "@/components/ui/background-boxes";
import dailydevImgUrl from "@/assets/dailydev.svg";
import { Github, Linkedin } from "lucide-react";

function PresentationCard() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 xl:m-0 left-0 self-center xl:self-start rounded-lg xl:sticky xl:top-[40px] h-1/3 w-full xl:w-auto xl:max-w-2xl bg-white z-10 relative overflow-hidden">
      <div className="absolute h-[350px] sm:h-96 -top-20 w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <Boxes />
      </div>
      <img
        className="absolute -right-10 sm:-right-20 -bottom-5 sm:-bottom-10 w-40 sm:w-52 -z-10 rotate-180"
        role="presentation"
        loading="lazy"
        src={LineimgUrl}
      />
      <img
        className="absolute -left-20 bottom-32 w-40 sm:w-52 -z-10"
        role="presentation"
        loading="lazy"
        src={LineFireimgUrl}
      />
      <div className="flex flex-col content-between items-center text-muted py-10 px-7">
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
          <h1 className="text-black text-2xl">Harold delory</h1>
          <div className="max-w-80 gap-10 flex flex-col items-center">
            <p>
              Un développeur qui aime découvrir et apprendre de nouvelles choses
              !
            </p>
            <div className="flex flex-row flex-nowrap gap-5">
              <Github width={30} className=" stroke-[#FF7900]" />
              <Linkedin width={30} className=" stroke-[#FF7900]" />
              <img src={dailydevImgUrl} width={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
