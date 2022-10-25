import "./App.css";
import Counter from "./components/Counter";
import {
  CounterContextProvider,
} from "./contexts/CounterContext";

function App() {
  return (
    <>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </>
  );
}

export default App;
