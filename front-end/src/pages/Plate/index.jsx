import { useState, useEffect } from 'react';
import { useQuantity } from '../../contexts/quantityContext';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { FaPlus,FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { Link, useParams } from 'react-router-dom';
import { PiReceipt } from "react-icons/pi";

import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import {SideMenu} from '../../components/SideMenu'

import {Container, Display, Main, TagContainer, QuantityToCart} from './styles';

export function Plate() {
  const { id } = useParams()
  const [plateInfo, setPlateInfo] = useState(null);
  const {incrementQuantity, setQuantityToZero} = useQuantity();
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get("/ingredients")
      setIngredients(response.data.name);
    }

    fetchIngredients();
  }, []);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes/index-dish?title=${search}`);
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    }

    fetchDishes()
  }, [search, ingredients])

  return(
    <Container>

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onSearch={(query) => setSearch(query)}
      />

      <Header onChange ={(e) => setSearch(e.target.value)} onOpenMenu={() => setMenuIsOpen(true)}/>

      <Main>
        
        <ButtonText title= "Voltar" onClick={handleReturn}/>

        <Display>
          {plateInfo && plateInfo.image && (
          <>
          <img src={`http://localhost:3333/files/${plateInfo.image}`} alt={plateInfo.title}/>

          <div className='top'>
            <h2>{plateInfo.title}</h2>
            <h3>{plateInfo.description}</h3>
            <TagContainer>
              {plateInfo.ingredients && plateInfo.ingredients.map((ingredient) => (
                <Tag key={ingredient.id} title={ingredient.name} className="tag"/>
              ))}
            </TagContainer>
          </div>
          {
            user.role === "admin" ? 
            ( 
              <div className='button'>
                <Link to={`/edit-dish/${id}`}>
                  <Button title="Editar prato" />
                </Link>
              </div>
            ) : (
              <QuantityToCart>
                <div className='quantity'>
                  <button className="subtract" onClick={() => {setCount((count) => Math.max(count - 1, 0))}}>
                    <FaMinus/>
                  </button>

                  <strong>{count}</strong>

                  <button className="add" onClick={() => {setCount((count) => count + 1)}}>
                    <FaPlus/>
                  </button>
                </div>

                  <Button onClick={handleInclude} className="addToCart">
                    <PiReceipt/>
                    <strong>{`incluir ∙ R$ ${plateInfo.price}`}</strong>
                  </Button>
              </QuantityToCart>
            )
          }
          </>
          )}
        </Display>

      </Main>


      <Footer/>

    </Container>
  )
}