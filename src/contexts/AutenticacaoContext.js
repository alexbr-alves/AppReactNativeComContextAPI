import { createContext, useState } from 'react'

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children} ) {
  const [usuario, setUsuario] = useState({})

  function login(email, senha){
    if(email == 'alex@email.com' &&
      senha == 123
    ){
      setUsuario({
        nome: 'Alex',
        email: email,
        endereco: 'Avenida A, Nº 200',
        referencia: 'Do lado daquele negocio',
        telefone: '(79)99999-9999'
      })
      return 'ok'
    }
    else {
      return 'Email ou senha incorretos'
    }
  }

  return (
    <AutenticacaoContext.Provider value={{
      login,
      usuario
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}