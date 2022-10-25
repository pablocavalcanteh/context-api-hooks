import { useCounterContext } from "../../contexts/CounterContext";
import { Button } from "../Button";

export default function Counter() {
  const [state, dispatch] = useCounterContext();
  console.log(state);
  return (
    <>
      <div className="center">
        <p>{state.counter}</p>
        <Button actionClick={() => dispatch.increase()}>Adicionar</Button>
        <Button actionClick={() => dispatch.decrease()}>Diminuir</Button>
      </div>
    </>
  );
}
