import React from "react";
import styled from "styled-components";
import space from "../../../styles/space";
import { color } from "../../../styles/color";
import { fontSizes,fontWeights } from "../../../styles/font";

const SecondPageCardItemLeft = styled.div`
    display:flex;
    flex-direction: column;
    width:40%;
    height:350px;
    overflow:hidden;
    border-radius:5%;
    box-shadow:0px 1px 5px 1px ${color.gdsc.blue};
`;

const SecondPageCardItemRightContainer = styled.div`
    display:flex;    
    flex-direction: column;
    width:60%;
    height:100%;
    padding-left: 3%;
    justify-content: space-between;
`;

const SecondPageCardItemTopContainer = styled.div`
    display:flex;    
    flex-direction: row;
    height:45%;
    justify-content: space-between;
`;

const SecondPageCardItemTop1 = styled.div`
    display:flex;
    width:47.5%;
    height:100%;
    overflow:hidden;
    border-radius:5%;
    box-shadow:0px 1px 5px 1px ${color.gdsc.blue};
    background-color: #4285F5;
`;

const SecondPageCardItemTop2 = styled.div`
    display:flex;
    width:47.5%;
    height:100%;
    overflow:hidden;
    border-radius:5%;
    box-shadow:0px 1px 5px 1px ${color.gdsc.blue};
    background-image:url("/assets/img/아이디어톤.png");
    background-size:cover;

`;

const SecondPageCardItemDown = styled.div`
    display:flex;
    height:50%;
    overflow:hidden;
    border-radius:5%;
    box-shadow:0px 1px 5px 1px ${color.gdsc.blue};
    background-image:url("/assets/img/엠티.png");
    background-size:cover;
`;

const SecondPageCardTextLeft = styled.p`
    font-size:${fontSizes['3xl']};
    color:#575757;
    width:100%;
    margin-top: ${space[10]};
    padding:${space[10]};
`;

const SecondPageCardTextTitleLeft = styled.h4`
    font-size:${fontSizes['4xl']};
    color:${color.black};
    margin-bottom: ${space[20]};
    font-weight:${fontWeights.bold};
`;

const SecondPageCardTextTitleTop1 = styled.h4`
    white-space: pre-wrap;
    margin-top: ${space[24]};
    margin-left: ${space[4]};
    font-size:${fontSizes['4xl']};
    color:${color.white};
    margin-bottom: ${space[20]};
    font-weight:${fontWeights.bold};
`;


const GDSC_COMMUNICATION = [
    {
        title: "GDSC PKNU 교류 활동",
        text: "커뮤니티 매니징 팀을 통해 다른 동아리들과도 교류해요"

    },
    {
        title: "PKNU\n\nI-DEAR-THON",
    },
    {
        img:"/assets/img/아이디어톤.png"
    },
    {
        img:"/assets/img/엠티.png"
    }

];

function SecondPageCard(){
    return(
        <>
            <SecondPageCardItemLeft key={GDSC_COMMUNICATION[0].id}>
                <SecondPageCardTextLeft>
                    <SecondPageCardTextTitleLeft>
                        {GDSC_COMMUNICATION[0].title}
                    </SecondPageCardTextTitleLeft>
                    {GDSC_COMMUNICATION[0].text}
                </SecondPageCardTextLeft>
            </SecondPageCardItemLeft>

            <SecondPageCardItemRightContainer>
                <SecondPageCardItemTopContainer>
                    <SecondPageCardItemTop1 key={GDSC_COMMUNICATION[1].id}>
                   
                        <SecondPageCardTextTitleTop1>
                            {GDSC_COMMUNICATION[1].title}
                        </SecondPageCardTextTitleTop1>
                        {GDSC_COMMUNICATION[1].text}
                       
                    </SecondPageCardItemTop1>
                    <SecondPageCardItemTop2 key={GDSC_COMMUNICATION[2].id}>
                
                    </SecondPageCardItemTop2>
                </SecondPageCardItemTopContainer>
                <SecondPageCardItemDown key={GDSC_COMMUNICATION[3].id}>
        
                </SecondPageCardItemDown>
            </SecondPageCardItemRightContainer>
        </>
        )
}

export default SecondPageCard;
