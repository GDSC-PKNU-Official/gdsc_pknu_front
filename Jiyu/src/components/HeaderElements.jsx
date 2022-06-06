import styled from "styled-components";
import {color} from "../styles/color";
import { NavLink as Link } from "react-router-dom";

export const Head = styled.header`
    width:100%;
    background: ${color.white};
`
export const Center = styled.div`
    width:100%;
    display:flex;
    height: 150px;
    justify-content:center;
`
export const Nav = styled.nav`
    width:1440px;
    display: flex;
    align-items:center;
`
export const NavLink = styled(Link)`
    color:#575757;
    font-size:2.4rem;
    padding: 0 1.1em;
`

export const NavMenu = styled.ul`
    width:100%;
    display:flex;
    justify-content:flex-end;
    margin-right:5.938rem;
`

export const NavBtn = styled.div`
    display:flex;
`

export const NavBtnLink = styled(Link)`
    font-size:2rem;
    background-color:${(props)=>props.to==='/Login'?'#fff':'#C4C4C4'};
    color:${(props)=>props.to==='/Login'?'#4285F5':'#fff'};
    border:0.2rem solid ${(props)=>props.to==='/Login'?'#4285F5':'#C4C4C4'};
    border-radius:2rem;
    padding: 0.625em 2.188em;
    cursor:pointer;
    text-decoreation:none;
    margin:0 0.75em;
`

export const LineEvent = styled.ul`
    font-size:0;
    display:flex;
    width:100%;
    height:0.6rem;
`

export const LineColor = styled.li`
    width:100%;
    background-color:${(props)=>props.title};
`
