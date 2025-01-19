import { Github } from "lucide-react";
import ExperienceCard from "@ui/experience-card";
import Section from "@ui/section";

export default function Projects() {
  return (
    <Section>
      <h1 className="pb-20 text-start text-5xl md:text-8xl ">
        Mes <span className="text-accent">projets</span>
      </h1>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          title="Développeur logiciel"
          type="CDI"
          description="Mission à définir"
          date_start="Janvier 2025"
          date_end="Aujourd'hui"
          icons={[]}
          missions={[]}
        />
        <ExperienceCard
          title="Développeur logiciel"
          type="Alternance"
          description="En tant qu'alternant, j'intervenais dans le suivi, le développement, le déploiement et la maintenance de projet Odoo, pour des clients en B2B. Je participais également au développement du logiciel propriétaire de TetraUp Madper"
          date_start="Août 2022"
          date_end="Août 2024"
          icons={[<Github />]}
          missions={[
            "Participer aux réunions d’initialisation de projet afin de comprendre la demande. Participer aux réunions techniques.",
            "Concevoir, développer et déployer des applications.",
            "Concevoir des structures de bases de données.",
            "Accompagner, suivre et former les clients dans leur projet.",
            "Travailler au sein d’une équipe de développeurs.",
          ]}
        />
      </div>
    </Section>
  );
}
