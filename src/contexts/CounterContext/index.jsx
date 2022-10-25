import P from 'prop-types'
import { createContext, useContext, useReducer, useRef } from 'react';
import { factoryActions } from './action-factory';
import { reducer } from './reducer';

const CounterContext = createContext()

export const initialState = {
    counter: 0,
    loading: false
}

export const CounterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = useRef(factoryActions(dispatch))
    return <CounterContext.Provider value={[state, actions.current]}>{children}</CounterContext.Provider>
}

CounterContextProvider.propTypes = {
    children: P.node.isRequired,
}

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if (typeof context === 'undefined') {
        throw new Error('You have to use useCounterContext inside <CounterContextProvider />')
    }

    return [...context]
}