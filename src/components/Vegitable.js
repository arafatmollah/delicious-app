import React, { useEffect, useState } from 'react'
import './style.css'
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Vegitable() {
  const [vegitable,setVegitable] = useState([])

  useEffect(()=>{
    getVegetarian();
  },[])

  const getVegetarian = async () =>{
    const check = localStorage.getItem('vegetarian')

    if(check){
      setVegitable(JSON.parse(check))
    }
    else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json()
        
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
      console.log(data)
      setVegitable(data.recipes)
    }
    }


  return (
    <div>
      {
            <Wrapper>
              Vegitable Picks
              <Splide options={{
                      perPage:3,
                      arrows:false,
                      pagination:false,
                      drag:'free',
                      
                    }}>
              {
                vegitable.map((recipe)=>{
                  return(
                    <SplideSlide key={recipe.id}>
                      <Card>
                     
                      <img src={recipe.image} alt=""></img>
                      <p>{recipe.title}</p>
                    </Card>
                    </SplideSlide>
                  )
                })
              }
              </Splide>
            </Wrapper> 
            }
    </div>
      
    
  )
}

const Wrapper = styled.div`
margin: 2rem 0rem;

`
const Card = styled.div`

min-height:20rem;
border:2rem;
overflow:hiden;
margin: 2rem 0rem;

img{
  height:250px;
  width:300px;
  border-radius:2rem;
  
}
p{
  text-align:center;
  font-weight:200;
  margin-bottom:20px;
 
}
`
export default Vegitable