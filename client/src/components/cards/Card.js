import React, { useState } from "react"; 
import "./card.css";
import Axios from 'axios'

import Modal from './Modal/Modal'
 function Card(props){


    const [isModalVisible, setIsModalVisible] = useState(false)
    const [editValues, setEditValues] = useState({
        id: props.id,
        name:props.name,
        cost:props.cost,
        category:props.category
    })

    console.log(editValues)


    const handleEditGame = ()=>{
   
        Axios.put("http://localhost:3001/edit", {
            id: editValues.id,
            name:editValues.name,
            cost:editValues.cost,
            category:editValues.category
        }).then((response)=>{
            console.log(response)
          })

        setIsModalVisible(false)

    }

    const handleDeleteGames = ()=>{
        debugger
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then((response)=>{
            console.log(response)
          })

          setIsModalVisible(false)

    }

    const handleChangeValues = value =>{
   
        setEditValues(prevValues =>({
            ...prevValues, 
            [value.target.id]:value.target.value
        }))
    }
    

    return (<div className="card--container">
        <h1 className="card--title">{props.name}</h1>
        <p className="card--category">{props.category}</p>
        <p className="card--cost">R${props.cost}</p>
        <button onClick={()=>{setIsModalVisible(true)}}>Open</button>
        
        {isModalVisible ? <Modal title= 'Editar' 

        onClose={()=> setIsModalVisible(false)}> 

         <div className="containerEditar">
      
          
                <input 
                type='text'
                id='name'
                placeholder="Nome do jogo"
                value={editValues.name}
                onChange={handleChangeValues}
               
                ></input>
                
                <input 
                type='text'
                id='cost'
                placeholder="Preço"
                value={editValues.cost}
                onChange={handleChangeValues}
                ></input>

                <input 
                type='text'
                id='category'
                placeholder="Categoria" 
                value={editValues.category}
                onChange={handleChangeValues}
                ></input>
       

       <button onClick={handleEditGame}>editar </button>
       <button onClick={handleDeleteGames}>deletar </button>
          

         </div>
        
         </Modal> : null}
    </div>
    )
}


export default Card;