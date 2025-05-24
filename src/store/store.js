import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./stats/slice";
const store = configureStore({
  reducer: {
    statsReducer: statsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ];
  },
});

export { store };
