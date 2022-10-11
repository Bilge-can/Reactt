import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App"

import topla from "./my-module.js"
import "./callback.js"
import "./array-function"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

console.log(topla(2, 7));
