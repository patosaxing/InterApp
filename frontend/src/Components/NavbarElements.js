import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background: #f5f5f5;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
font-size: 1.8rem;
`
export const NavLink = styled(Link)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    color: #FF4040;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #000;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: right;
font-size: 1.8rem;
margin-right: 24px

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
font-size: 1.8rem;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #FF4040;
padding: 10px 22px;
color: #000;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

margin-left: 24px


&:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #010606;
}
`;