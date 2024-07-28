import { useState } from "react"


function App() {
  const [color, Setcolor] = useState("olive");
  return (
    <>
      <div className="h-screen w-full"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            onClick={() => Setcolor("red")}
            >Red</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            onClick={() => Setcolor("green")}
            >Green</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            onClick={() => Setcolor("blue")}
            >Blue</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}
            onClick={() => Setcolor("olive")}
            >Olive</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Gray"}}
            onClick={() => Setcolor("gray")}
            >Gray</button> 
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
            onClick={() => Setcolor("yellow")}
            >Yellow</button> 
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "pink"}}
            onClick={() => Setcolor("pink")}
            >Pink</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "purple"}}
            onClick={() => Setcolor("purple")}
            >Purple</button> 
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "lavender"}}
            onClick={() => Setcolor("lavender")}
            >Lavender</button> 
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "white"}}
            onClick={() => Setcolor("white")}
            >White</button> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "black"}}
            onClick={() => Setcolor("black")}
            >Black</button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App
