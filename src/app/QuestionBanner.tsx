import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Questiondata } from "./page";

export default function QuestionBanner(props: {
  data: Questiondata;

  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [init, setInit] = useState(false);
  const [timer, setTimer] = useState(10);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!init) {
      return;
    }
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalId);
          setInit(false);
          setFinished(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [init]);

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center top-0 left-0">
      <span className="fixed w-screen h-screen bg-black/15 left-0 top-0 " />
      <div className="w-1/2 bg-white font-medium z-10 text-center h-64 flex justify-center items-center rounded-md  p-20 flex-col">
        <p className="text-3xl mb-8">{props.data.question}</p>
        {finished ? (
          <button
            onClick={() => props.setIsOpen(false)}
            className="p-2 border rounded-md border-black w-36"
          >
            Cerrar
          </button>
        ) : init ? (
          <p className="text-xl">Tiempo restante: {timer} segundos</p>
        ) : (
          <button
            onClick={() => setInit(true)}
            className="p-2 border rounded-md border-black w-36"
          >
            Empezar
          </button>
        )}
      </div>
    </div>
  );
}
