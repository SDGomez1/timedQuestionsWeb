import Card from "./Card";
export interface Questiondata {
  question: string;
  index: number;
}

const questionData: Questiondata[] = [
  {
    question:
      "En Romanos 12:2 Qué nos aconseja Pablo hacer para verificar cuál es la voluntad de Dios?",
    index: 1,
  },
  {
    question:
      "Romanos 12:1 el apóstol Pablo nos hace una rogativa; indique cuál es?",
    index: 2,
  },
  {
    question: "Pablo qué nos sugiere cómo debemos pensar de sí mismo?",
    index: 3,
  },
  {
    question: '"Somos un cuerpo en Cristo" qué nos quiso decir Pablo?',
    index: 4,
  },
  {
    question:
      "Enumere cuatro (4) dones espirituales e indíquenos cómo podemos usarlos?",
    index: 5,
  },
  {
    question:
      "Cómo debemos comportarnos los unos con los otros según Romanos 12:10-14?",
    index: 6,
  },
  {
    question: "Qué nos recomienda Pablo hacer con nuestros enemigos? Por qué?",
    index: 7,
  },
  {
    question: "Cuántas autoridades constituyó Dios?",
    index: 8,
  },
  {
    question: "Qué me pasará si me resisto a la autoridad?",
    index: 9,
  },
  {
    question: "Romanos 13:8-10 Qué es lo que podemos deberle algo a alguien?",
    index: 10,
  },
  {
    question:
      "Romanos 13:12-14 nos indica qué es lo que tenemos que desechar, así mismo nos indica de que debemos vestirnos. Puede indicarnos eso?",
    index: 11,
  },
  {
    question: "Qué es lo que debemos aceptar del débil en la fe?",
    index: 12,
  },
  {
    question:
      "Nosotros somos del Señor, sin embargo, ante quién tenemos que comparecer? Para qué?",
    index: 13,
  },
  {
    question: "Sabemos que debemos agradar al prójimo, en qué? Romanos 15:2",
    index: 14,
  },
  {
    question:
      "Para qué sirve todo lo que fue escrito en tiempos pasados? Romanos 15:4-5",
    index: 15,
  },
  {
    question:
      "Qué es lo que el apóstol Pablo creía de los cristianos en Roma? Romanos 15:2",
    index: 16,
  },
  {
    question:
      "Nos puede reseñar cuál era el plan de viaje de Pablo? Romanos 15:22-28",
    index: 17,
  },
  {
    question: "El apóstol Pablo menciona en Romanos 16 a Febe. Quién era ella?",
    index: 18,
  },
  {
    question:
      "Qué ruego y advertencia nos hace el apóstol Pablo de los que causan disensiones?",
    index: 19,
  },
  {
    question: "Quién es el que nos afirma?",
    index: 20,
  },
  {
    question: "Para qué nos afirma Dios?",
    index: 21,
  },
  {
    question: "Cuál es el resultado de que sea afirmado?",
    index: 22,
  },
  {
    question: "Para qué sirvió el rechazo de Israel al evangelio? Romanos 11",
    index: 23,
  },
  {
    question: "Cuál es el tema general del libro de Romanos?",
    index: 24,
  },
  {
    question: "El apóstol Pablo enseña que la fe viene por? Romanos 10:17",
    index: 25,
  },
  {
    question: "Para obtener la salvación en qué se debe creer? Romanos 1:16",
    index: 26,
  },
  {
    question: "Cómo se revela la justicia de Dios? Romanos 1:17",
    index: 27,
  },
  {
    question: "Por qué no se alcanza la gloria de Dios? Romanos 3:23",
    index: 28,
  },
  {
    question: "Cuál es la paga del pecado? Romanos 6:23",
    index: 29,
  },
  {
    question: "Cuál es la dádiva de Dios? Romanos 6:23",
    index: 30,
  },
];

export default function Home() {
  const cards = questionData.map((data) => {
    return <Card data={data} />;
  });
  return (
    <main className=" h-screen w-screen p-10">
      <span className="border border-black/50 w-full h-full  grid grid-cols-6 grid-rows-5 justify-items-center items-center rounded-lg">
        {cards}
      </span>
    </main>
  );
}
