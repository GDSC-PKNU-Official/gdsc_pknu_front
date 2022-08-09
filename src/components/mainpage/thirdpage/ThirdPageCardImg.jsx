import React from "react";
import styled from "styled-components";

const CardImg = styled.img`
    width:100%;
    height:200px;
`;

function ThirdPageCardImg(){
    return(
        <>
            <CardImg src="/" alt="코드랩 이미지"/>
        </>
    );
}

export default ThirdPageCardImg;
