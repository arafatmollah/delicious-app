import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import motion from 'framer-motion'
import { useParams,Link } from 'react-router-dom'

function Cusine() {
const[varity,setVarity]=useState([])
let params=useParams()
  const getCusine = async(recipe)=>{
    const check = localStorage.getItem('varity')

    if(check){
      setVarity(JSON.parse(check))
    }
    else{
      const api = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cusine=${recipe}`)
    const data = await api.json()
    localStorage.setItem('popular', JSON.stringify(data.results))
    setVarity(data.results)
    }
  }
  useEffect(()=>{
    getCusine(params.cusine);
    console.log(params.cusine)
  },[params.cusine])
  return (
   <Grid>
    {
      varity.map((cuisine)=>{
        return(
          <Card>
           <img src={cuisine.image}></img>
           <h4>{cuisine.title}</h4>
          </Card>
        )
      })
    }
   </Grid>
  )
}

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(10rem,1fr));
grid-gap:5rem;
`
const Card = styled.div`
overflow:hidden;
img{
  width:100%;
  border-radius:2rem;
}
h4{
  text-align:center;
}

`
export default Cusine