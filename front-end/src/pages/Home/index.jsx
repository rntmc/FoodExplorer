import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import { api } from "../../services/api";

import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Section2 } from "../../components/Section2"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import {SideMenu} from '../../components/SideMenu'

export function Home(){
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  function handlePlate(id){
    navigate(`/dish/${id}`)
  }
  
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

      <Banner />

      <main>
        {dishes &&
          <>
            {dishes.some(dish => dish.category === "Refeição") && (
              <Section2 title="Refeições">
                <Splide options={{ perPage: 4}}>
                  {dishes
                    .filter(dish => dish.category === "Refeição")
                    .map(dish => (
                      <SplideSlide key={String(dish.id)} >
                        <Card
                          className="card"
                          title={dish.title}
                          description={dish.description}
                          price={dish.price}
                          image={dish.image}
                          id={dish.id}
                          onClick={() => handlePlate(dish.id)}
                        />
                      </SplideSlide>
                    ))}
                </Splide>
              </Section2>
            )}

            {dishes.some(dish => dish.category === "Sobremesa") && (
              <Section2 title="Sobremesas">
                <Splide options={{ perPage: 4, gap: '1rem' }}>
                  {dishes
                    .filter(dish => dish.category === "Sobremesa")
                    .map(dish => (
                      <SplideSlide key={String(dish.id)}>
                        <Card
                          title={dish.title}
                          description={dish.description}
                          price={dish.price}
                          image={dish.image}
                          id={dish.id}
                          onClick={() => handlePlate(dish.id)}
                        />
                      </SplideSlide>
                    ))}
                </Splide>
              </Section2>
            )}

            {dishes.some(dish => dish.category === "Bebida") && (
              <Section2 title="Bebidas">
                <Splide options={{ perPage: 4, gap: '1rem' }}>
                  {dishes
                    .filter(dish => dish.category === "Bebida")
                    .map(dish => (
                      <SplideSlide key={String(dish.id)}>
                        <Card
                          title={dish.title}
                          description={dish.description}
                          price={dish.price}
                          image={dish.image}
                          id={dish.id}
                          onClick={() => handlePlate(dish.id)}
                        />
                      </SplideSlide>
                    ))}
                </Splide>
              </Section2>
            )}
          </>
        }
      </main>
 
      <Footer/>
    </Container>
  )
}