import React, { useState } from "react";
import Counter from "./using-state";

/**
 * In jsx, shortcircuits / ternary expressions are possible.
 *
 * Whenever a component is not chosen to be part of the render tree, it is considered unmounted.
 */
const DestroyedState = () => {
  const [hide, toggle] = useState(false);

  return (
    <div>
      <button onClick={() => toggle(v => !v)}>
        {hide ? "Show " : "Destroy"}
      </button>
      {!hide && <Counter />}
    </div>
  );
};

export default DestroyedState;
