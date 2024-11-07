"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
interface SelectThemeCardProps {
  title: string;
  color: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  data: any[];
}
export default function SelectThemeCard({
  title,
  color,
  setSelectedColor,
  data,
}: SelectThemeCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <motion.div
          whileHover={{ scale: 1.2 }}
          style={{ backgroundColor: color }}
          className="size-56 p-1 select-none font-bold text-3xl flex justify-center items-center text-center"
          onClick={() => {
            setSelectedColor(color);
            setOpen(true);
          }}
        >
          <p className="shrink flex">{title}</p>{" "}
        </motion.div>
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((title, index) => {
            console.log(title.title);
            return <Card index={index + 1} key={index} title={title.title} />;
          })}
        </div>
      )}
    </>
  );
}
