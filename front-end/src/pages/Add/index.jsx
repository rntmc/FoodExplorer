import {useState} from 'react'

import { useNavigate } from 'react-router-dom';

import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {ButtonText} from '../../components/ButtonText'
import {FileField} from '../../components/FileField'
import {TextField} from '../../components/TextField'
import {DropDownField} from '../../components/DropDownField'
import {TextArea} from '../../components/TextArea'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'
import {TagItem} from '../../components/TagItem'

import { api } from '../../services/api';

import {Container, Main} from './styles'

export function Add() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null)

  const navigate = useNavigate();

  function handleReturn() {
    navigate(-1)
  }


  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewDish() {
    if(!title || !description || !category || !price || !image || ingredients.length === 0) {
      return alert("Favor preencher todos os campos obrigatórios") 
    }
    
    if(newIngredient){
      return alert("Favor confirmar os ingredientes que não foram adicionados, porém estão preenchidos no formulário")
    }
    
    try {
      const response = await api.post("/dishes/add-dish", {
        title,
        category,
        price,
        ingredients,
        description,
      });

      const dishId = response.data.id;

      if (image) {
        const fileImage = new FormData();
        fileImage.append("image", image);
  
        api.patch(`dishes/update-dish-image/${dishId}`, fileImage)
          .then(() => {
            alert("Prato criado com sucesso!");
            navigate("/");
            console.log(response)
          })
          .catch((error) => {
            console.error("Erro ao enviar imagem:", error.message);
          });
      } else {
        alert("Prato criado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro na criação do prato");
        console.error("Erro ao criar prato:", error.message);
      }
    }
}

  return (
    <Container>
      <Header/>
        <ButtonText title="Voltar" onClick={handleReturn}/>
        
        <Main>
          <h1>Adicionar prato</h1>

          <div className='top'>
            <FileField title="Imagem do prato" onChange={(e) => setImage(e.target.files[0])} />
            <TextField title="Nome" placeholder="Exemplo: Salada Ceasar" value={title} onChange={e=>setTitle(e.target.value)}/>
            <DropDownField title="Categoria" value={category} onChange={e=>setCategory(e.target.value)}/>
          </div>

          <div className='center'>
            <Section title="Ingredientes">
              <div className="tags">
                {
                  ingredients.map((ingredient, index) => (
                    <TagItem 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => {handleRemoveIngredient(ingredient)}}
                    />
                  ))
                }

                <TagItem 
                  isNew
                  placeholder="adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
            </Section>
            <TextField placeholder="R$ 00,00" title="Preço" value={price} onChange={e=>setPrice(e.target.value)}/>
          </div>

          <TextArea title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={description} onChange={e=>setDescription(e.target.value)}/>
          
        <div className='bottom'>
          <Button 
            title="Salvar alterações" 
            onClick={handleNewDish}
          />
        </div>

        </Main>

      <Footer/>
    </Container>
  )
}