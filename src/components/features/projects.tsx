import ProjectCard from "@ui/project-card";
import Section from "@ui/section";
import portfolioUrl from "@/assets/portfolio_screen.jpg";

export default function Projects() {
  return (
    <Section>
      <h1 className="pb-20 text-start text-5xl md:text-8xl ">
        Mes <span className="text-accent">projets</span>
      </h1>
      <div className="flex flex-col gap-3">
        <ProjectCard
          title="Portfolio"
          url={"https://github.com/Skilldron/portfolio-website"}
          imgUrl={portfolioUrl}
          tags={[
            {
              name: "React",
              bgColor: "bg-blue-100",
              textColor: "text-blue-800",
            },
            {
              name: "TailwindCSS",
              bgColor: "bg-teal-100",
              textColor: "text-teal-800",
            },
            {
              name: "CI/CD",
              bgColor: "bg-yellow-100",
              textColor: "text-yellow-800",
            },
          ]}
        />
      </div>
    </Section>
  );
}
