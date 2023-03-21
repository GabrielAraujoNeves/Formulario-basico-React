import React, { useState } from 'react'
import "../ManinPage/MainPage.css"

const ManinPage = () => {
    
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");

    const Enditificacao  = (nome) => {
     setNome(nome.target.value);
    }

    const Idades = (idade) => {
     setIdade(idade.target.value);
    }

    const Emails = (email) => {
     setEmail(email.target.value);
    } 

    const EnviarDados = (e) => {
     e.preventDefault();

     console.log(`nome: ${nome} Idade: ${idade} e-mail: ${email}`)
    }


  return (
    <div className='Espaco'>
     <h2>Formulario de inscrição</h2>

     <form className='Form' onSubmit={EnviarDados}>

       <label htmlFor='nome'>Nome:</label>
       <div className='Input'>
        <input
        id='nome'
        value={nome}
        onChange={Enditificacao}
        />
       </div>

       <label htmlFor="idade">Idade:</label>
       <div className='Input'>
         <input
         id='idade'
         value={idade}
         onChange={Idades}/>
       </div>

       <label htmlFor='email'>E-mail:</label>
       <div className='Input'>
        <input
        id='email'
        value={email}
        onChange={Emails}/>
       </div>

       <button type='submit' >Enviar dados</button>
     </form>
    </div>
  )
}

export default ManinPage