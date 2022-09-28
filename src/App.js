import { useEffect } from "react";

function App() {

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
      
    </div>
  );
}

export default App;
