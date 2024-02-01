import { useState } from 'react';

import { Container, Form, Logo } from './styles';
import { BsFillHexagonFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert("Favor preencher todos os campos")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!")
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert ("Nao foi possivel cadastrar")
        }
      });
  }
  
  return (
    <Container>
      <Logo>
        <BsFillHexagonFill />
        <h2>food explorer</h2>
      </Logo>

      <Form>
        <h1>Crie sua conta</h1>

        <p>Seu nome</p>
        <Input 
          placeholder='Exemplo: Maria da Silva'
          type='text'
          autoComplete="username"
          onChange={e => setName(e.target.value)}
        />

        <p>Email</p>
        <Input 
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='text'
          autoComplete="username"
          onChange={e => setEmail(e.target.value)}
        />

        <p>Senha</p>
        <Input 
          placeholder='No mínimo 6 caracteres'
          type='password'
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Criar Conta' onClick={handleSignUp}/>

        <Link to='/'>
          Ja tenho uma conta
        </Link>
          
      </Form>

    </Container>
  )
}