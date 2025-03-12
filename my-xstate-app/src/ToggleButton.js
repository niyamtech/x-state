// src/components/ToggleButton.js
import React from "react";
import { useMachine } from "@xstate/react";
import { toggleMachine } from "../toggleMachine";

const ToggleButton = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button
      onClick={() => send("TOGGLE")}
      style={{
        padding: "10px 20px",
        backgroundColor: state.matches("active") ? "green" : "gray",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {state.matches("active") ? "ON 🔥" : "OFF ❄️"}
    </button>
  );
};

export default ToggleButton;
