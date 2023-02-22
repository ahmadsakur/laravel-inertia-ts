import React, { useState, createContext, useContext, useEffect } from "react";

const RegionContext = createContext({});

export function useRegion() {
  return useContext(RegionContext);
}

export function RegionProvider({ children }) {
  const [region, setRegion] = useState('');

  useEffect(() => {
    const region = localStorage.getItem("region");
    if (region) {
      setRegion(region);
    } else {
      setRegion("id");
    }
  }, []);


  const isIDRegion = region === "id";


  const changeRegion = (region) => {
    setRegion(region);
    localStorage.setItem('region', region);
  };

  return (
    <RegionContext.Provider
      value={{
        region,
        isIDRegion,
        changeRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}