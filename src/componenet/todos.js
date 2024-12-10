import { useCallback, useState } from "react";
import Todos from "./memoTodos"

export default function Main(){
    const [count, setCount] = useState(0);
    const[todos, setTodos] = useState([]);

    const increment = () =>{
        setCount((c) => c+1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);

    },[todos]);


    return(
        <>
            <div className="todos">
                <Todos todos={todos} addTodo={addTodo} />
                <hr />
                <div>
                    count : {count}
                    <button onClick={increment}>+</button>
                </div>
            </div>
        </>
    )
}