import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useTheme } from "../theme-provider";
import { useEffect, useState } from "react";

interface TagsType {
  name: string;
  bgColor: string;
  textColor: string;
}

export default function ProjectCard({
  title,
  imgUrl,
  url,
  tags,
}: {
  title: string;
  imgUrl: string;
  url: string;
  tags: TagsType[];
}) {
  const { theme } = useTheme();
  const [hoverColor, setHoverColor] = useState({ initial: "", hover: "" });

  useEffect(() => {
    if (theme === "light") {
      setHoverColor({
        initial: "hsl(var(--background))",
        hover: "rgb(240, 235, 230)",
      });
    } else {
      setHoverColor({
        initial: "hsl(var(--background))",
        hover: "rgb(60, 57, 58, 0.6)",
      });
    }
  }, [theme]);

  return (
    <a href={url}>
      <motion.div
        initial={{ backgroundColor: hoverColor.initial }}
        whileHover={{
          backgroundColor: hoverColor.hover,
          scale: 1.02,
        }}
        transition={{ duration: 0.4 }}
        className="flex flex-col w-full gap-5 p-5 rounded-md text-start"
      >
        <div className="flex gap-5 relative">
          <div>
            <img
              src={imgUrl}
              className="h-44 w-full object-cover aspect-[13/8]  rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h2 className="pb-10">{title}</h2>
            <ul className="flex flex-row gap-5">
              {tags.map(({ name, bgColor, textColor }) => (
                <li
                  className={`${bgColor} ${textColor} px-3 py-1 rounded-full`}
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute right-0 -translate-y-1/2 top-1/2">
            <ArrowRightIcon />
          </div>
        </div>
      </motion.div>
    </a>
  );
}
