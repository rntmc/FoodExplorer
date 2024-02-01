import { useState, useEffect } from "react";

import { useNavigate} from "react-router-dom";

import { api } from "../../services/api";

import { Container, Links, Main } from "./styles"

import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Section2 } from "../../components/Section2"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"

export function Home(){
  const [ingredients, setIngredients] = useState([]);

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState("")

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
      const response = await api.get(`/dishes/index-dish?title=${search}`)
      setDishes(response.data);
      console.log(response.data);
    }

    fetchDishes()
  }, [search, ingredients])

  return(
    <Container>
      <Header onChange ={(e) => setSearch(e.target.value)}/>
    
      <Main>

        <Banner/>

        <Section2 title="Refeicoes">
          <Links>
          {dishes &&
            dishes.map((dish) => {
              if (dish.category === "Refeição") {
                return (
                  <Card
                    key={String(dish.id)}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    id={dish.id}
                    onClick={() => handlePlate(dish.id)}
                  />
                );
              }
              return null;
            })}
          </Links>
        </Section2>

        <Section2 title="Sobremesas">
          <Links>
          {dishes &&
            dishes.map((dish) => {
              if (dish.category === "Sobremesa") {
                return (
                  <Card
                    key={String(dish.id)}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    id={dish.id}
                    onClick={() => handlePlate(dish.id)}
                  />
                );
              }
              return null;
            })}
          </Links>
        </Section2>

        <Section2 title="Bebidas">
          <Links>
          {dishes &&
            dishes.map((dish) => {
              if (dish.category === "Bebida") {
                return (
                  <Card
                    key={String(dish.id)}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    id={dish.id}
                    onClick={() => handlePlate(dish.id)}
                  />
                );
              }
              return null;
            })}
          </Links>
        </Section2>

      </Main>
 
      <Footer/>
    </Container>
  )
}