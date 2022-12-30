import React, { createContext, useEffect, useState } from "react";
import { getCategories } from "../service";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const handleCategories = async () => {
      return await getCategories().then(({ edges }) => setCategories(edges));
    };
    handleCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext, CategoriesProvider };
