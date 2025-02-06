import ExperienceCard from "../ui/experience-card";
import Section from "@ui/section";
import { SiPostgresql, SiOdoo, SiDocker, SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export default function Experiences() {
  return (
    <Section>
      <h1 className="pb-20 text-start text-[2.55rem] md:text-[5rem] xl:text-8xl ">
        Experiences <span className="text-accent">professionnelles</span>
      </h1>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          key={"mission-1"}
          title="Développeur web"
          company="OpenItech"
          type="CDI"
          description="Intégrer l'équipe de développement d'OpenItech, mon rôle est de participer au développement de l'outil de son principale client Avosdim. J'interviens également le processus complet de création d'applications webs principalement développé en React."
          date_start="Janvier 2025"
          date_end="Aujourd'hui"
          icons={[
            <SiPostgresql
              key="SiPostgresql"
              size={30}
              textRendering={"PostgreSQL"}
            />,
            <SiPython key="SiPython" size={30} textRendering={"Python"} />,
            <IoLogoJavascript
              key="IoLogoJavascript"
              size={30}
              textRendering={"Javascript"}
            />,
            <SiOdoo key="SiOdoo" size={30} textRendering={"Odoo"} />,
            <SiDocker key="SiDocker" size={30} textRendering={"Docker"} />,
          ]}
          missions={[]}
        />
        <ExperienceCard
          key={"mission-0"}
          title="Développeur logiciel"
          type="Alternance"
          company="Tetra Up"
          description="En tant qu'alternant, j'intervenais dans le suivi, le développement, le déploiement et la maintenance de projet Odoo, pour des clients en B2B. Je participais également au développement du logiciel propriétaire de TetraUp : Madper"
          date_start="Août 2022"
          date_end="Août 2024"
          icons={[
            <SiPostgresql
              key="SiPostgresql"
              size={30}
              textRendering={"PostgreSQL"}
            />,
            <SiPython key="SiPython" size={30} textRendering={"Python"} />,
            <IoLogoJavascript
              key="IoLogoJavascript"
              size={30}
              textRendering={"Javascript"}
            />,
            <SiOdoo key="SiOdoo" size={30} textRendering={"Odoo"} />,
            <SiDocker key="SiDocker" size={30} textRendering={"Docker"} />,
          ]}
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
