import { createContext, useContext, useState } from 'react';

const QuantityContext = createContext();

export function QuantityProvider({ children }) {
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (id, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + amount,
    }));
  };

  const setQuantityToZero = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: 0,
    }));
  };
  
  return (
    <QuantityContext.Provider value={{ quantities, incrementQuantity, setQuantityToZero }}>
      {children}
    </QuantityContext.Provider>
  );
}

export function useQuantity() {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error('useQuantity deve ser usado dentro de um QuantityProvider');
  }
  return context;
}