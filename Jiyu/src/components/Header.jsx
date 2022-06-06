import React from "react";
import logo from "../logo.png";
import theme from "../styles/theme";
import App from "../App";

import {Routes, Route} from "react-router-dom";
import {Head, Center ,Nav, NavLink, NavMenu, NavBtn, NavBtnLink ,LineEvent,LineColor} from "./HeaderElements";

const Button = () =>{
    return(
        <NavBtn>
            <NavBtnLink to="/Login">Login</NavBtnLink>
            <NavBtnLink to="/Join">Join</NavBtnLink>
        </NavBtn>
    )
};

const NavRouter = () => {
    return(
        <Routes>
            <Route path="/"/>
            <Route path="/Event" element={<App/>}/>
            <Route path="/Team" element={<App/>}/>
            <Route path="/FAQ" element={<App/>}/>
        </Routes>
    )
};

const Navgation = () => {
    return(
        <Nav>
            <NavLink to="/"><img src={logo} alt="GDSC_PKNU_logo"/></NavLink>
            <NavMenu>
                <NavLink to="/Event" activeStyle>Event</NavLink>
                <NavLink to="/Team" activeStyle>Team</NavLink>
                <NavLink to="/FAQ" activeStyle>FAQ</NavLink>
            </NavMenu>
            <NavRouter/>
            <Button/>
        </Nav>
    )
};

const HeaderLine = () => {
    return(
        <LineEvent>
            <LineColor title={theme.primaryBlue}></LineColor>
            <LineColor title={theme.primaryRed}></LineColor>
            <LineColor title={theme.primaryYellow}></LineColor>
            <LineColor title={theme.primaryGreen}></LineColor>
        </LineEvent>
    )
};

const Header = () => {
    return(
        <Head>
            <Center><Navgation/></Center>
            <HeaderLine/>
        </Head>
    )
};

export default Header;

