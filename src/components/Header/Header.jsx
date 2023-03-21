import React from 'react'
import logo from "../../assets/download.png"
import "../Header/Header.css"

const Header = () => {
  return (
    <div className='container'>
     <div className='Logo'>
        <img src={logo} alt='Logo' height={40}/>
        <p>Start Logo</p>
        </div>
      <div className='navBar'>
        <div className='listaDeContato'>
            <li>Sobre Nós</li>
            <li>Contatos</li>
            <li>E-mail</li>
        </div>

      </div>
    </div>
  )
}

export default Header