import { useState, useEffect } from 'react';
import { useQuantity } from '../../contexts/quantityContext';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { FaPlus,FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { Link, useParams } from 'react-router-dom';

import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';

import {Container, Display} from './styles';

export function Plate() {
  const { id } = useParams()
  const [plateInfo, setPlateInfo] = useState(null);
  const {incrementQuantity, setQuantityToZero} = useQuantity();
  const [count, setCount] = useState(0)

  const {user} = useAuth();
  const navigate = useNavigate()

  const handleInclude = () => {
    if (count > 0) {
      incrementQuantity(id, count);
      setCount(0);
    } else {
      setQuantityToZero(id);
    }
  };

  function handleReturn() {
    navigate(-1)
  }

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

        <ButtonText title= "Voltar" onClick={handleReturn}/>

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

        {
          user.role === "admin" ? 
          (
            <Link to={`/edit-dish/${id}`}>
              <div className='button'>
                <Button title="Editar prato"/>
              </div>
            </Link>
          ) : (
            <div className="bottom" >
              <button className="subtract" onClick={() => {setCount((count) => Math.max(count - 1, 0))}}>
                <FaMinus/>
              </button>

              <strong>{count}</strong>

              <button className="add" onClick={() => {setCount((count) => count + 1)}}>
                <FaPlus/>
              </button>

              <Button title={`incluir ∙ R$ ${plateInfo.price}`} onClick={handleInclude}/>
          </div>
          )
        }
        </div>
        </>
        )}
      </Display>

      <Footer/>

    </Container>
  )
}