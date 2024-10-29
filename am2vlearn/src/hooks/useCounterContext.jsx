import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      "Contexto do contador deve ser usado dentro de um Provider"
    );
  }

  return context;
}