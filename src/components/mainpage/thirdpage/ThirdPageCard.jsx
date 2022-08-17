import React from "react";
import styled from "styled-components";
import space from "../../../styles/space";
import { color } from "../../../styles/color";
import { fontSizes,fontWeights } from "../../../styles/font";

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
    color:#575757;
    width:100%;
    padding:${space[10]};
`;

const ThirdPageCardTextTitle = styled.h4`
    font-size:${fontSizes['4xl']};
    color:${color.black};
    margin-bottom: ${space[6]};
    font-weight:${fontWeights.bold};
`;

const ThirdPageCardImg = styled.img`
    width:100%;
    height:200px;
`;

const GDSC_GROWTH = [
    {
        id: "TechTalk",
        title: "테크톡",
        text: "GDSC PKNU 자체의 기술세미나"
    },
    {
        id: "Codelab",
        title: "코드랩",
        text: "프로그래밍 언어를 단계적으로 공부 및 실습"
    },
    {
        id: "Conference",
        title: "컨퍼런스",
        text: "전문적인 주제에 대한 토론 및 발표"
    }
];

const growthCards = () => {
    const growthCard = GDSC_GROWTH.map(growth => {
        const source = `/assets/img/${growth.title}.jpg`;
        return(
            <ThirdPageCardItem key={growth.id}>
                <ThirdPageCardImg src={source} alt={growth.title}/>
                <ThirdPageCardText>
                    <ThirdPageCardTextTitle>{growth.title}</ThirdPageCardTextTitle>
                    {growth.text}
                </ThirdPageCardText>
            </ThirdPageCardItem>
        )
    })
    return growthCard;
}
function ThirdPageCard(){
    return(
            <>
                {growthCards()}
            </>
        )
}

export default ThirdPageCard;
