import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@ui/drawer";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@ui/dialog";
import { useMediaQuery } from "usehooks-ts";
import { Separator } from "./separator";
import React, { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";

export default function ExperienceCard({
  title,
  type = "CDI",
  company,
  description,
  date_start,
  date_end,
  missions,
  icons,
}: {
  title: string;
  type: "CDI" | "Alternance";
  company: string;
  description: string;
  date_start: string;
  date_end: string;
  missions: string[];
  icons: JSX.Element[];
}) {
  const is_computer = useMediaQuery("(min-width: 768px)");

  if (is_computer)
    return (
      <Dialog>
        <DialogTrigger>
          <Card
            title={title}
            company={company}
            type={type}
            description={description}
            date_start={date_start}
            date_end={date_end}
          />
        </DialogTrigger>
        <DialogContent className="w-[725px] py-10">
          <DialogHeader>
            <DialogTitle>
              {title}
              <span className="pl-5 text-base text-muted">
                {date_start} - {date_end}
              </span>
            </DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <div className="flex flex-row flex-wrap gap-5 pt-3">
              {icons.map((element, index) => (
                <div
                  className="flex flex-col items-center"
                  key={`${element.props.textRendering}-${index}`}
                >
                  {element}
                  <p>{element.props.textRendering}</p>
                </div>
              ))}
            </div>
          </DialogHeader>
          <Separator />
          <DialogTitle>Mes missions</DialogTitle>
          <ul className="list-disc list-inside">
            {missions.map((value, index) => {
              return (
                <li className="pb-1" key={`mission-${index}`}>
                  {value}
                </li>
              );
            })}
          </ul>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer>
      <DrawerTrigger>
        <Card
          title={title}
          type={type}
          company={company}
          description={description}
          date_start={date_start}
          date_end={date_end}
        />
      </DrawerTrigger>
      <DrawerContent className="min-h-[70svh]">
        <DrawerHeader>
          <DrawerTitle className="text-2xl">{title}</DrawerTitle>
          <DrawerDescription className="text-muted">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <Separator />
        <div className="flex flex-col gap-10 p-10">
          <div>
            <h2>Stack technique</h2>
            <div className="flex flex-row flex-wrap gap-5 pt-3">
              {icons.map((element, index) => (
                <div
                  className="flex flex-col items-center"
                  key={`${element.props.textRendering}-${index}`}
                >
                  {element}
                  <p>{element.props.textRendering}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-10">Mes missions</h2>
            <ul className="list-disc list-inside">
              {missions.map((value, index) => {
                return (
                  <li className="pb-1" key={`mission-${index}`}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function Card({
  title,
  type = "CDI",
  company,
  description,
  date_start,
  date_end,
}: {
  title: string;
  type: "CDI" | "Alternance";
  company: string;
  description: string;
  date_start: string;
  date_end: string;
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
    <motion.div
      initial={{ backgroundColor: hoverColor.initial }}
      whileHover={{
        backgroundColor: hoverColor.hover,
        scale: 1.02,
      }}
      transition={{ duration: 0.4 }}
      className="flex flex-col w-full gap-5 p-5 rounded-md text-start"
    >
      <div>
        <h2>
          {title} - <span className="text-base text-secondary">{type}</span>
        </h2>
        <h3>{company}</h3>
      </div>
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
