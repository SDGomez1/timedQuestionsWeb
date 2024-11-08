"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import ArrorLeft from "@/assets/ArrowLeft";
import { useDispatch } from "react-redux";
import { updateNowOpened } from "@/store/features/stateSlice";
interface SelectThemeCardProps {
  title: string;
  color: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  data: any[];
  category: "VB" | "SM" | "CB" | "C";
}
export default function SelectThemeCard({
  title,
  color,
  setSelectedColor,
  data,

  category,
}: SelectThemeCardProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
        <>
          <span
            onClick={() => {
              const array = [true, true, true, true];
              dispatch(updateNowOpened(array));
              setSelectedColor("#fff");
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            <ArrorLeft className="absolute top-8 size-8 left-8" />
          </span>

          <div className="flex flex-col gap-2">
            {data.map((title, index) => {
              return (
                <Card
                  category={category}
                  qUsed={title.used}
                  qIndex={index + 1}
                  setSectionOpened={setOpen}
                  setColor={setSelectedColor}
                  index={index + 1}
                  key={index}
                  title={title.title}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
