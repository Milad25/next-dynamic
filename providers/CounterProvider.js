import { createContext, useContext, useReducer } from 'react';
import counterReducer from './CounterReducer';

const CounterContext = createContext();
const CounterContextDispatcher = createContext();

const initialState = 0;

const CouterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={state}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CouterProvider;

export const useCounter = () => useContext(CounterContext);
export const useCounterActions = () => useContext(CounterContextDispatcher);
