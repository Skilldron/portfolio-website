import ExperienceCard from "../ui/experience-card";

export default function Experiences() {
  return (
    <div>
      <h1 className="pb-20 text-start">
        Experiences <span className="text-accent">professionnelles</span>
      </h1>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          title="Développeur logiciel"
          type="CDI"
          description="Mission à définir"
          date_start="Janvier 2025"
          date_end="Aujourd'hui"
        />
        <ExperienceCard
          title="Développeur logiciel"
          type="Alternance"
          description="En tant qu'alternant, j'intervenais dans le suivi, le développement, le déploiement et la maintenance de projet Odoo, pour des clients en B2B. Je participais également au développement du logiciel propriétaire de TetraUp Madper"
          date_start="Août 2022"
          date_end="Août 2024"
        />
      </div>
    </div>
  );
}
