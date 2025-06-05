import Card from "./Card";
export interface Questiondata {
  question: string;
  index: number;
}

const questionData: Questiondata[] = [
  {
    question:
      "En Mateo 1:1, ¿cómo se reconoce a Jesús? ¿Será el cumplimiento de alguna promesa o pacto?",
    index: 1,
  },
  {
    question: "¿Quién engendró al Señor Jesús, José o el Espíritu Santo? Mt. 1:20",
    index: 2,
  },
  {
    question: "¿Qué hicieron los sabios del oriente al ver al niño Jesús? Mt. 2:11",
    index: 3,
  },
  {
    question: "¿Cómo fue que se le apareció el ángel a José? Mt. 1:20 / Mt. 2:13 / Mt. 2:19",
    index: 4,
  },
  {
    question: "¿Qué predicaba Juan el Bautista? Mt. 3:2",
    index: 5,
  },
  {
    question: "¿Cómo llamaba Juan el Bautista a los Fariseos y Saduceos? Mt. 3:7",
    index: 6,
  },
  {
    question: "¿Quién llevó al Señor Jesús al desierto? ¿Para qué? Mt. 4:17",
    index: 7,
  },
  {
    question: "¿Cómo el Señor Jesús comenzó a predicar? Mt. 4:17",
    index: 8,
  },
  {
    question:
      "¿De quién es el Reino de los cielos según el Sermón dado por Jesús en el monte? Mt. 5:3 / Mt. 5:10",
    index: 9,
  },
  {
    question:
      "¿Cómo debe ser nuestra justicia con respecto a la de los Escribas y Fariseos? Mt. 5:20",
    index: 10,
  },
  {
    question: "¿El Señor Jesús dijo que deberíamos ser perfectos como quién? Mt. 5:48",
    index: 11,
  },
  {
    question: "¿Qué debería hacer un cristiano cuando ora? Mt. 6:6-7",
    index: 12,
  },
  {
    question:
      "¿Qué recomendación nos dio el Señor Jesús referente a juzgar a otros? Mt. 1-3",
    index: 13,
  },
  {
    question: "¿Cómo consideró el Señor Jesús a un hombre sabio? Mt. 7:24",
    index: 14,
  },
  {
    question:
      "El Señor Jesús demostró su autoridad frente a: ??? (dé tres ejemplos) Mt. 8:3 / Mt. 8:5 / Mt. 8:16 / Mt. 8:26 / Mt. 8:32",
    index: 15,
  },
  {
    question: "¿Quién fue el primer discípulo llamado por Jesús? Mt. 9:9",
    index: 16,
  },
  {
    question: "¿Qué fue lo que dijo el Señor Jesús referente a la cosecha? Mt. 9:37",
    index: 17,
  },
  {
    question:
      "El Señor Jesús envió a Sus discípulos a predicar. ¿Dónde les dijo que no entraran? Mt. 10:5-6",
    index: 18,
  },
  {
    question:
      "¿De qué les dijo el Señor Jesús a sus discípulos que se cuidaran? Mt. 10:17",
    index: 19,
  },
  {
    question:
      "¿Qué fue lo que Juan el Bautista le preguntó a Jesús cuando estaba encarcelado? Mt. 11:3",
    index: 20,
  },
  {
    question: "¿Dónde tienen que ir los que están cargados y cansados? Mt. 11:28",
    index: 21,
  },
  {
    question: "¿Qué enseña el Señor Jesús acerca del día de reposo? Mt. 12",
    index: 22,
  },
  {
    question: "¿Qué aprendiste acerca del ayuno? Mt. 6:16-18",
    index: 23,
  },
  {
    question: "¿El Señor Jesús vino para cumplir la ley? Mt. 5:17-18",
    index: 24,
  },
];
export default function Home() {
  const cards = questionData.map((data) => {
    return <Card data={data} key={data.index}/>;
  });
  return (
    <main className=" h-screen w-screen p-10">
      <span className="border border-black/50 w-full h-full  grid grid-cols-6 grid-rows-4 justify-items-center items-center rounded-lg ">
        {cards}
      </span>
    </main>
  );
}
