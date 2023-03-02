import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import YourApp from "./YourApp"
import FromScratch from "./FromScratch"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <YourApp /> */}
    {/* <FromScratch /> */}
  </React.StrictMode>
)
