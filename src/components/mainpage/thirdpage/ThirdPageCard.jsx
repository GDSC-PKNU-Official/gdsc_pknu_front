import React from "react";
import styled from "styled-components";
import space from "../../../styles/space";
import { color } from "../../../styles/color";
import { fontSizes,fontWeights } from "../../../styles/font";
import ThirdPageCardImg from "./ThirdPageCardImg";

const ThirdPageCardItem = styled.div`
    display:flex;
    flex-direction: column;
    width:30%;
    height:350px;
    overflow:hidden;
    border-radius:5%;
    box-shadow:0px 1px 5px 1px ${color.gdsc.blue};
`; 

const ThirdPageCardText = styled.p`
    font-size:${fontSizes['3xl']};
    width:100%;
    padding:${space[10]};
`;

const ThirdPageCardTextTitle = styled.h4`
    font-size:${fontSizes['4xl']};
    margin-bottom: ${space[4]};
    font-weight:${fontWeights.bold};
`;

function ThirdPageCard(){
    return(
        <ThirdPageCardItem>
            <ThirdPageCardImg/>
            <ThirdPageCardText>
                <ThirdPageCardTextTitle>테크톡</ThirdPageCardTextTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </ThirdPageCardText>
        </ThirdPageCardItem>
        );
}

export default ThirdPageCard;
