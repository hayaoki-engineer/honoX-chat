import { useState } from "hono/jsx";

export default function Chat() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Chat</button>
    </div>
  );
}
