/*
 * File Created: Tuesday, 30th March 2021 3:58:38 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 30th March 2021 3:58:38 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
