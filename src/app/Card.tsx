"use client";
import { motion } from "framer-motion";
import { Questiondata } from "./page";
import { useState } from "react";
import QuestionBanner from "./QuestionBanner";

const colors = [
  {
    background: "#DCCCFE",
    text: "#9C75F9",
  },
  {
    background: "#DEEDFF",
    text: "#3099F4",
  },
  {
    background: "#FFDDDC",
    text: "#FC5045",
  },
  {
    background: "#FFF0B3",
    text: "#FFC61F",
  },
];

export default function Card(props: { data: Questiondata }) {
  const color = colors[props.data.index % colors.length];
  const [selected, setSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.button
        whileHover={!selected ? { scale: 1.1 } : {}}
        whileTap={!selected ? { scale: 0.9 } : {}}
        className="bg-white  p-3 w-28 text-center rounded-md font-bold disabled:text-neutral-400 transition duration-75"
        style={{
          backgroundColor: !selected ? color.background : "#E5E5E5",
          borderColor: !selected ? color.text : "#E5E5E5",
          borderWidth: !selected ? 2 : 0,
        }}
        disabled={selected}
        onClick={() => {
          setIsOpen(true);
          setSelected(true);
        }}
      >
        <p>{props.data.index}</p>
      </motion.button>
      {isOpen ? (
        <QuestionBanner data={props.data} setIsOpen={setIsOpen} />
      ) : (
        <></>
      )}
    </>
  );
}
