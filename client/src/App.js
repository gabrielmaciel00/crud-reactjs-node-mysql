import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios"
import Card from "./components/cards/Card";



function App() {
  const [values, setValues] = useState()
  const [listGames, setListGames] = useState()

  const handleChangeValues = value =>{

   setValues(prevValue =>({
     ...prevValue,
     [value.target.name]: value.target.value,
   }))
  }

  const hanleClickButton =()=>{
  
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response)=>{
      console.log(response)
    })
 
  }

  useEffect(()=>{

    Axios.get("http://localhost:3001/getCards").then((response)=>{
      setListGames(response.data)
    })
  }, [])

  return <div className="app--container">

  <div className='register--container'>
    <h1 className='register--title'>Loja</h1>
    <input onChange={handleChangeValues} type='text' name='name' placeholder='Nome' className='register--input'/>
    <input onChange={handleChangeValues} type='text' name='cost' placeholder='Preço' className='register--input'/>
    <input onChange={handleChangeValues} type='text' name='category' placeholder='Categoria' className='register--input'/>
    <button onClick={hanleClickButton}  className='register--button'>Cadastrar</button>
  </div>

{typeof listGames !== "undefined" && listGames.map((value)=>{

  return <Card 
  key={value.idgames}
  listCard={listGames} 
  setListCard={setListGames}
  id={value.idgames}
  name={value.name}
  cost={value.cost}
  category={value.category}>

  </Card>
})}



  </div>
  
}

export default App;
