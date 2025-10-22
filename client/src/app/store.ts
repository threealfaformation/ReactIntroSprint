import { configureStore } from "@reduxjs/toolkit";
import authslice from "../features/Authslice";
export const boutique = configureStore({
  reducer: {
auth : authslice.reducer

  },
});








