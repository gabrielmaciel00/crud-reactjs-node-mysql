import React from 'react'

import  exit from'../../../images/exit.png'


const Modal = ({ id = 'modal', onClose = () => { }, children, title = 'Meu Modal' }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id='modal' className='modal' onClick={handleOutsideClick}>
            <div className='container'>
                <header>{title} <button className='close' onClick={onClose}><img src={exit}/></button></header>

                <div className='content'>
                   <div className='conteudo'>{children}</div> 
                    <footer>
                        <button>Salvar</button>
                    </footer> 
                </div>


            </div>
        </div>
    )

}

export default Modal;