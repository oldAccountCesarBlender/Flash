import { createContext, useReducer, useEffect } from "react";

const initialState = {
  darkTheme: false,
  toggleTheme: () => {},
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "toggleTheme":
      return {
        ...state,
        darkTheme: payload ? payload : !state.darkTheme,
      };
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async () => {
    const options = JSON.parse(localStorage.getItem("options"));
    if (options) {
      dispatch({
        type: "toggleTheme",
        payload: options.darkTheme,
      });
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const toggleTheme = (darkTheme) => {
    dispatch({
      type: "toggleTheme",
      payload: darkTheme,
    });

    localStorage.setItem(
      "options",
      JSON.stringify({
        darkTheme: darkTheme,
      })
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
