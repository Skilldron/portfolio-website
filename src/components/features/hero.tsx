import { FlipWords } from "@ui/flip-words";
import Section from "@ui/section";
import BigNumber from "../ui/big-number";

export default function Hero() {
  const words = ["curieux", "passionné", "entreprenant"];

  return (
    <Section>
      <div className="flex flex-col gap-20">
        <div>
          <h1 className="flex flex-col items-start w-full text-5xl sm:text-6xl md:text-8xl mb-10">
            Développeur
            <br />
            <FlipWords words={words} className="px-0 text-secondary" />
          </h1>
          <p className="text-justify text-base md:max-w-[70%]">
            Avec l&apos;informatique, nous n&apos;avons de cesse
            d&apos;apprendre, et j&apos;adore ça. Le partage des connaissances,
            le travail d&apos;équipe, la bienveillance et l&apos;entraide sont
            des valeurs qui me tiennent à cœur.
          </p>
        </div>
        <div className="flex flex-row gap-20">
          <BigNumber number={3} label="années d'expérience" />
          <BigNumber number={5} label="années d'études" />
        </div>
      </div>
    </Section>
  );
}
