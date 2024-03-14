import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import {Container, Main} from './styles'

import { Header } from '../../components/Header';
import {Footer} from '../../components/Footer'
import {ButtonText} from '../../components/ButtonText'
import {FileField} from '../../components/FileField'
import {TextField} from '../../components/TextField'
import {DropDownField} from '../../components/DropDownField'
import {TextArea} from '../../components/TextArea'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'
import {TagItem} from '../../components/TagItem'

export function Edit() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null)

  const params = useParams();
  const navigate = useNavigate();

  function handleReturn() {
    navigate(-1)
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }
  
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  async function handleEditDish() {
    if(!title || !description || !category || !price || ingredients.length === 0) {
      return alert("Favor preencher todos os campos obrigatórios") 
    }
    
    if(newIngredient){
      return alert("Favor confirmar os ingredientes que não foram adicionados, porém estão preenchidos no formulário")
    }
    
    try {
      const response = await api.put(`/dishes/edit-dish/${params.id}`, {
        title,
        category,
        price,
        ingredients,
        description,
    });
      const dishId = response.data.dish.id;
      const fileImage = new FormData();
      fileImage.append("image", image);
  
      api.patch(`dishes/update-dish-image/${dishId}`, fileImage)
      
      alert("Prato atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro na atualização do prato");
        console.error("Erro ao atualização prato:", error.message);
      }
    }
  }

async function handleRemove(){
  const confirm = window.confirm("Deseja remover a o prato?");
  try {
    if(confirm){
      await api.delete(`/dishes/delete-dish/${params.id}`);
      alert("Prato excluido com sucesso!")
      navigate("/");
    }
  } catch(error) {
    console.error("Erro ao excluir prato:", error.message);
  }
}

useEffect(() => {
  async function fetchDishDetails() {
    try {
      const response = await api.get(`/dishes/show-dish/${params.id}`);
      const dishDetails = response.data;
      console.log("Detalhes do prato:", dishDetails);
      setTitle(dishDetails.title);
      setDescription(dishDetails.description);
      setCategory(dishDetails.category);
      setPrice(dishDetails.price);

      // Mapeia diretamente os ingredientes, assumindo que são strings
      const updatedIngredients = dishDetails.ingredients.map((ingredient) => ingredient.name);
      setIngredients(updatedIngredients);

      if (dishDetails.image) {
        setImage(dishDetails.image);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do prato:', error.message);
    }
  }

  fetchDishDetails();
}, [params.id]);

  return (
    <Container>
      <Header/>

        <ButtonText title="Voltar" onClick={handleReturn}/>
        
        <Main>
          <h1>Editar prato</h1>

          <div className='top'>
            <FileField title="Imagem do prato" type="file" onChange={(e) => setImage(e.target.files[0])} />
            <TextField title="Nome" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <DropDownField title="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}/>
          </div>

          <div className='center'>
            <Section title="Ingredientes" className="ingredients">
              <div className='tags'>
              {ingredients.map((ingredient, index) => (
                <TagItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {handleRemoveIngredient(ingredient)}}
                />
              ))}
              <TagItem
                isNew
                placeholder="adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
              </div>
            </Section>
            <TextField value={price} title="Preço" onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <TextArea title="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
          
        <div className='bottom'>
          <Button title="Excluir prato" className="delete" onClick={handleRemove}/>
          <Button title="Salvar alterações" className="save" onClick={handleEditDish}/>
        </div>

        </Main>

      <Footer/>
    </Container>
  )
}
