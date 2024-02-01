import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { FaPlus,FaMinus } from "react-icons/fa";

import { Link, useParams } from 'react-router-dom';

import { ButtonText } from '../../../components/ButtonText';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Tag } from '../../../components/Tag';
import { Button } from '../../../components/Button';

import {Container, Display} from './styles';

export function Plate_admin() {
  const { id } = useParams()
  const [plateInfo, setPlateInfo] = useState(null);

  useEffect(() => {
    async function fetchPlateInfo() {
      try {
        const response = await api.get(`/dishes/show-dish/${id}`);
        console.log('Plate info:', response.data);
        setPlateInfo(response.data);
      } catch (error) {
        console.error('Erro ao mostrar prato:', error);
      }
    }
  
    fetchPlateInfo();
  }, [id]);

  return(
    <Container>

      <Header/>

      <Link to="/">
        <ButtonText title= "Voltar"/>
      </Link>

      <Display>
        {plateInfo && plateInfo.image && (
        <>
        <img src={`http://localhost:3333/files/${plateInfo.image}`} alt={plateInfo.title}/>

        <div className='top'>
          <h2>{plateInfo.title}</h2>
          <h3>{plateInfo.description}</h3>
          {plateInfo.ingredients && plateInfo.ingredients.map((ingredient) => (
            <Tag key={ingredient.id} title={ingredient.name} />
          ))}

          <div className="bottom" >
            <button className="subtract">
              <FaMinus/>
            </button>

            <strong>01</strong>

            <button className="add">
              <FaPlus/>
            </button>

            <Button title="incluir . R$25,00"/>
          </div>
          
        </div>
        </>
        )}
      </Display>

      <Footer/>

    </Container>
  )
}