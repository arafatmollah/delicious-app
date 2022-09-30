import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import './style.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular,setPopular] = useState([])

  useEffect(()=>{
    getPopular();
  },[])

  const getPopular = async () =>{
    const check = localStorage.getItem('popular')

    if(check){
      setPopular(JSON.parse(check))
    }
    else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes))
        
      console.log(data)
      setPopular(data.recipes)
    }
    }


  return (
    <div>
      {
            <Wrapper>
              Popular Picks
              <Splide options={{
                      perPage:4,
                      arrows:false,
                      pagination:false,
                      drag:'free',
                      gap:"5rem",
                    }}>
              {
                popular.map((recipe)=>{
                  return(
                    <SplideSlide key={recipe.id}>
                      <Card className='card' key={popular.id}>
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
  height:150px;
  width:200px;
  border-radius:2rem;
  
}
p{
  text-align:center;
  font-weight:200;
  margin-bottom:20px
 
}
`
export default Popular