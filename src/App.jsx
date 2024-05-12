import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./Components/Header";
import Card from "./Components/Cards";
import datum from "./Data.jsx"


export default function App() {
    const Cards = datum.map(data => {
      return <Card 
      key= {data.title}
      data = {data}
      />
    } )

  return (
      <>
        <Header />
        <section className="cards-list">
                {Cards}
            </section>
      </>

  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)