import { useState } from "react";

const useCounter = (valorInicial) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = (valor) => {
    setContador(contador + valor);
  };

  const resetear = () => {
    setContador(0);
  };

  const decrementar = (valor) => {
    setContador(contador - valor);
  };

  return {
    contador,
    incrementar,
    resetear,
    decrementar,
  };
};

export default useCounter;
