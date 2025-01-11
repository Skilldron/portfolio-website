import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";

export default function ExperienceCard({
  title,
  type = "CDI",
  description,
  date_start,
  date_end,
}: {
  title: string;
  type: "CDI" | "Alternance";
  description: string;
  date_start: string;
  date_end: string;
}) {
  return (
    <motion.div
      initial={{ backgroundColor: "rgba(60, 57, 58, 0)" }}
      whileHover={{
        backgroundColor: "rgb(60, 57, 58, 0.6)",
        scale: 1.02,
      }}
      transition={{ duration: 0.4 }}
      className="flex flex-col w-full gap-5 p-5 rounded-md text-start"
    >
      <h2>
        {title} - <span className="text-base text-secondary">{type}</span>
      </h2>
      <p className="text-base w-10/12">{description}</p>
      <div className="flex justify-between">
        <p>
          {date_start} - {date_end}
        </p>
        <EyeIcon className="stroke-secondary" />
      </div>
    </motion.div>
  );
}
