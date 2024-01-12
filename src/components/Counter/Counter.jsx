import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            current count: {counter}
            <div onClick={() => setCounter(counter + 1)}>increase</div>
            <div onClick={() => setCounter(counter - 1)}>decrease</div>
        </div>
    );
};

export default Counter;
