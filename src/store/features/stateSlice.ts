import { PreguntasVerdades, PSM, cb, c } from "@/app/data";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface preguntas {
  index: number;
  title: string;
  used: boolean;
}

export interface stateProps {
  nowOpened: boolean[];
  preguntasVerdades: preguntas[];
  pcm: preguntas[];
  pb: preguntas[];
  pc: preguntas[];
}

interface query {
  index: number;
  used: boolean;
}
const initialState: stateProps = {
  nowOpened: [true, true, true, true],
  preguntasVerdades: PreguntasVerdades,
  pcm: PSM,
  pb: cb,
  pc: c,
};

export const counterSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    updateNowOpened: (state, action: PayloadAction<boolean[]>) => {
      state.nowOpened = action.payload;
    },
    updatePVerdades: (state, action: PayloadAction<query>) => {
      state.preguntasVerdades[action.payload.index].used = action.payload.used;
    },
    updatePMult: (state, action: PayloadAction<query>) => {
      state.pcm[action.payload.index].used = action.payload.used;
    },
    updatePB: (state, action: PayloadAction<query>) => {
      state.pb[action.payload.index].used = action.payload.used;
    },
    updatePC: (state, action: PayloadAction<query>) => {
      state.pc[action.payload.index].used = action.payload.used;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateNowOpened,
  updatePVerdades,
  updatePMult,
  updatePB,
  updatePC,
} = counterSlice.actions;

export default counterSlice.reducer;
