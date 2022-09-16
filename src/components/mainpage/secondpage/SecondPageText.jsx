import React from "react";
import styled from "styled-components";
import space from "../../../styles/space";
import { color } from "../../../styles/color";
import { fontSizes } from "../../../styles/font";

const ContentTitle = styled.li`
    list-style:none;
    &:nth-child(2){
        margin: ${space[8]} 0;
        color:${color.defaultColor};
    };
    ${({fontSize}) => {
        return `font-size: ${fontSize}`
    }};
`;

const TitleWord = "이렇게 교류해요!";
const TitleSubWord = "GDSC PKNU는 이렇게 교류 활동을 해요";
function SecondPageText(){
    return(
        <>
            <ContentTitle fontSize={fontSizes['6xl']}>
                {TitleWord}
            </ContentTitle>
            <ContentTitle fontSize={fontSizes['3xl']}>
                {TitleSubWord}
            </ContentTitle>
        </>
    );
}

export default SecondPageText;
