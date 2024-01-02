import React from "react";
import {createRoot} from "react-dom/client"
import "../assets/tailwind.css"

const Popup = () => {
  return (
    <div>
            <h1 className="text-4xl text-green-500 text-center">Hello World</h1>
            <img src="image.png" alt="" />
        </div>
    )
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup/>);

export default Popup;