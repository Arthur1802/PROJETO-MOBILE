import { useContext } from "react";
import { CounterHtmlContext } from "../context/CounterHtmlContext";

export const useCounterHtmlContext = () => {
  const context = useContext(CounterHtmlContext);

  if (!context) {
    throw new Error(
      "Contexto do contador deve ser usado dentro de um Provider"
    );
  }

  return context;
}