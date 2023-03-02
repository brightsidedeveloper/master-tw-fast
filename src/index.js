import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import YourApp from "./YourApp"
import FromScratch from "./FromScratch"

//* You can Keep App as a Referenece
//* You can use YourApp is a copy to play around with
//* You can use FromScratch to start from scratch (make your own project or create a design like this one)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
    {/* <YourApp /> */}
    {/* <FromScratch /> */}
  </React.StrictMode>
)
