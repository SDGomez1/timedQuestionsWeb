"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import QuestionBanner from "./QuestionBanner";
import { useDispatch } from "react-redux";
import {
  updatePB,
  updatePC,
  updatePMult,
  updatePVerdades,
} from "@/store/features/stateSlice";

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

export default function Card(props: {
  title: string;
  index: number;
  setSectionOpened: Dispatch<SetStateAction<boolean>>;
  setColor: Dispatch<SetStateAction<string>>;
  qIndex: number;
  qUsed: boolean;
  category: "VB" | "SM" | "CB" | "C";
}) {
  const color = "#fff";
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <motion.button
        whileHover={!props.qUsed ? { scale: 1.1 } : {}}
        whileTap={!props.qUsed ? { scale: 0.9 } : {}}
        className="bg-white  p-3 w-80 text-xl text-center rounded-md font-bold disabled:text-neutral-400 transition duration-75"
        style={{
          backgroundColor: !props.qUsed ? color : "#E5E5E5",
          borderColor: !props.qUsed ? color : "#E5E5E5",
          borderWidth: !props.qUsed ? 2 : 0,
        }}
        disabled={props.qUsed}
        onClick={() => {
          setIsOpen(true);
          if (props.category == "VB") {
            dispatch(updatePVerdades({ index: props.qIndex - 1, used: true }));
          }
          if (props.category == "SM") {
            dispatch(updatePMult({ index: props.qIndex - 1, used: true }));
          }
          if (props.category == "CB") {
            dispatch(updatePB({ index: props.qIndex - 1, used: true }));
          }
          if (props.category == "C") {
            dispatch(updatePC({ index: props.qIndex - 1, used: true }));
          }
        }}
      >
        <p>{props.index}</p>
      </motion.button>
      {isOpen ? (
        <QuestionBanner
          setColor={props.setColor}
          setSectionOpened={props.setSectionOpened}
          title={props.title}
          setIsOpen={setIsOpen}
        />
      ) : (
        <></>
      )}
    </>
  );
}
