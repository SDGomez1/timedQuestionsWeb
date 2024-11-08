"use client";
import { useState } from "react";
import Card from "./Card";
import SelectThemeCard from "./SelectThemeCard";
import { motion } from "framer-motion";
import { PreguntasVerdades } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateNowOpened } from "@/store/features/stateSlice";
export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#FFF");
  const openedCards = useSelector(
    (state: RootState) => state.stateSlice.nowOpened
  );
  const PreguntasVerdades = useSelector(
    (state: RootState) => state.stateSlice.preguntasVerdades
  );
  const psm = useSelector((state: RootState) => state.stateSlice.pcm);
  const pb = useSelector((state: RootState) => state.stateSlice.pb);
  const pc = useSelector((state: RootState) => state.stateSlice.pc);
  const dispatch = useDispatch();
  return (
    <motion.main
      animate={{ backgroundColor: selectedColor }}
      className=" h-screen w-screen gap-2 p-10 flex flex-col justify-center items-center"
    >
      <div className="flex gap-2">
        <motion.div
          onClick={() => {
            if (
              openedCards[0] === true &&
              openedCards[1] === false &&
              openedCards[2] === false &&
              openedCards[3] === false
            ) {
              return;
            }
            dispatch(updateNowOpened([true, false, false, false]));
          }}
          className={openedCards[0] ? "block" : "hidden"}
        >
          <SelectThemeCard
            category="VB"
            title="Verdades Biblicas"
            color="#DCCCFE"
            setSelectedColor={setSelectedColor}
            data={PreguntasVerdades}
          />
        </motion.div>
        <motion.div
          onClick={() => {
            if (
              openedCards[0] === false &&
              openedCards[1] === true &&
              openedCards[2] === false &&
              openedCards[3] === false
            ) {
              return;
            }
            dispatch(updateNowOpened([false, true, false, false]));
          }}
          className={openedCards[1] ? "block" : "hidden"}
        >
          <SelectThemeCard
            category="SM"
            title="Selección Multiple"
            color="#DEEDFF"
            setSelectedColor={setSelectedColor}
            data={psm}
          />
        </motion.div>
      </div>
      <div className="flex gap-2">
        <motion.div
          onClick={() => {
            if (
              openedCards[0] === false &&
              openedCards[1] === false &&
              openedCards[2] === true &&
              openedCards[3] === false
            ) {
              return;
            }
            dispatch(updateNowOpened([false, false, true, false]));
          }}
          className={openedCards[2] ? "block" : "hidden"}
        >
          <SelectThemeCard
            category="CB"
            title="Conocimiento Biblico"
            color="#FFDDDC"
            setSelectedColor={setSelectedColor}
            data={pb}
          />
        </motion.div>
        <motion.div
          onClick={() => {
            if (
              openedCards[0] === false &&
              openedCards[1] === false &&
              openedCards[2] === false &&
              openedCards[3] === true
            ) {
              return;
            }
            dispatch(updateNowOpened([false, false, false, true]));
          }}
          className={openedCards[3] ? "block" : "hidden"}
        >
          <SelectThemeCard
            category="C"
            title="Completar"
            color="#FFF0B3"
            setSelectedColor={setSelectedColor}
            data={pc}
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
