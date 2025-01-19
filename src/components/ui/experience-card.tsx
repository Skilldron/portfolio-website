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
import React from "react";

export default function ExperienceCard({
  title,
  type = "CDI",
  description,
  date_start,
  date_end,
  missions,
  icons,
}: {
  title: string;
  type: "CDI" | "Alternance";
  description: string;
  date_start: string;
  date_end: string;
  missions: Array<string>;
  icons: Array<JSX.Element>;
}) {
  const is_computer = useMediaQuery("(min-width: 768px)");

  if (is_computer)
    return (
      <Dialog>
        <DialogTrigger>
          <Card
            title={title}
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
            <div className="flex flex-row gap-5 pt-3">
              {icons.map((element, index) =>
                React.cloneElement(element, { key: `icon-${title}-${index}` }),
              )}
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
          description={description}
          date_start={date_start}
          date_end={date_end}
        />
      </DrawerTrigger>
      <DrawerContent className="min-h-[70svh]">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

function Card({
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
