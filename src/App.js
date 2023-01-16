import {useEffect, useState} from 'react';






function App() {

  const [greeting, setGreeting] = useState("");

  useEffect(()=>{
    const getGreeting = async()=>{
      const response = await fetch("http://localhost:5001");
      const data = await response.json();
      console.log(data)
      setGreeting(data[0].Module5);
    }
    getGreeting();
  }, [])

  return (
    <div>
      
    {greeting}
    </div>
  );
}

export default App;
