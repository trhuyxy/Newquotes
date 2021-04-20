import { configureStore } from "@reduxjs/toolkit";
import arraySliceTodos from "./arraySlice.js";
export default configureStore({
  reducer: {
    todos: arraySliceTodos
  }
});
