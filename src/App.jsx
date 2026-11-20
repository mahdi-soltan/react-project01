import { useState } from "react";
import Card from "./component/card";

const App = () => {
 const [num,setNum]=useState(0)

  return (
    <div className="min-h-screen w-full bg-gray-400 flex items-center justify-center">
      <Card />
      <button className="bg-green-600 border-2 p-0.5" onClick={()=>{setNum(num+1)}}>+</button>
      <p>{num}</p>
      <button className="bg-red-600 border-2 p-0.5" onClick={()=>{setNum(num-1)}}>-</button>
      
    </div>
  );
};

export default App;
