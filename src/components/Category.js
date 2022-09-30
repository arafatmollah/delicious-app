import React from 'react'
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa'
import {GiChopsticks, GiNoodles} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Category() {
  return (
    <List>
        <Slink to='/cusine/American'>
            <FaHamburger></FaHamburger>
            <h4>American</h4>
        </Slink>
        <Slink to='/cusine/Italian'>
            <FaPizzaSlice></FaPizzaSlice>
            <h4>Italian</h4>
        </Slink>
        <Slink to="/cusine/Thai">
           <GiNoodles></GiNoodles>
           <h4>Thai</h4>
        </Slink>
        <Slink to='/cusine/Chinese'>
            <GiChopsticks></GiChopsticks>
            <h4>Chinese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
display:flex;
justify-content:center;
align-item:center;
`
const Slink = styled(NavLink)`
display:flex;
flex-direction:column;
font-size:20px;
justify-content:center;
align-items:center;
border-radius:5rem;
margin:2rem 2rem;
text-decoration:none;
background-color:#494949;
color:white;
padding:1rem;
h4{
  text-align:center;
  font-size:15px;
  margin-right: 20px;
}
`

export default Category