"use client";
import { useState } from "react";
import Card from "./Card";
import SelectThemeCard from "./SelectThemeCard";
import { motion } from "framer-motion";
import { PreguntasVerdades } from "./data";
export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#FFF");
  const [openedCards, setOpenedCards] = useState([true, true, true, true]);
  return (
    <motion.main
      animate={{ backgroundColor: selectedColor }}
      className=" h-screen w-screen gap-2 p-10 flex flex-col justify-center items-center"
    >
      <div className="flex gap-2">
        <motion.div
          onClick={() => setOpenedCards([true, false, false, false])}
          className={openedCards[0] ? "block" : "hidden"}
        >
          <SelectThemeCard
            title="Verdades Biblicas"
            color="#DCCCFE"
            setSelectedColor={setSelectedColor}
            data={PreguntasVerdades}
          />
        </motion.div>
        <motion.div
          onClick={() => setOpenedCards([false, true, false, false])}
          className={openedCards[1] ? "block" : "hidden"}
        >
          <SelectThemeCard
            title="Selección Multiple"
            color="#DEEDFF"
            setSelectedColor={setSelectedColor}
            data={PreguntasVerdades}
          />
        </motion.div>
      </div>
      <div className="flex gap-2">
        <motion.div
          onClick={() => setOpenedCards([false, false, true, false])}
          className={openedCards[2] ? "block" : "hidden"}
        >
          <SelectThemeCard
            title="Conocimiento Biblico"
            color="#FFDDDC"
            setSelectedColor={setSelectedColor}
            data={PreguntasVerdades}
          />
        </motion.div>
        <motion.div
          onClick={() => setOpenedCards([false, false, false, true])}
          className={openedCards[3] ? "block" : "hidden"}
        >
          <SelectThemeCard
            title="Completar"
            color="#FFF0B3"
            setSelectedColor={setSelectedColor}
            data={PreguntasVerdades}
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
