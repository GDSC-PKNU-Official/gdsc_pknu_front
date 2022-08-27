import React,{useState, useRef} from "react";
import styled from "styled-components";
import space from "../../../styles/space";
import { color } from "../../../styles/color";
import { fontSizes,fontWeights } from "../../../styles/font";
import { useEffect } from "react";

const ThirdPageCardItem = styled.li`
    display:inline-block;
    list-style:none;
    white-space: normal;
    width:30%;
    height:100%;
    margin:0 ${10/6}%;
    overflow:hidden;
    border-radius:5%;
    box-shadow: rgba(66, 133, 244, 0.16) 0px 3px 6px, rgba(66, 133, 244, 0.23) 0px 3px 6px;
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

const ThirdPageCardItemGroup = styled.div`
    width:100%;
    height:100%;
    padding:${space[6]} 0;
    display:flex;
    overflow:hidden;
    justify-content: center;
`;
const ThirdPageCardSlideGroup = styled.ul`
    font-size:0;
    width:100%;
    height:100%;
    white-space: nowrap;
    padding:0;
`;

const ThirdPageCardImgGroup = styled.div`
    width:100%;
    height:60%;
`;

const ThirdPageCardImg = styled.img`
    width:100%;
    height:100%;
`;

const GDSC_GROWTH = [
    {
        title: "테크톡",
        text: "GDSC PKNU 자체의 기술세미나",
        img: "/assets/img/테크톡.jpg"
    },
    {
        title: "코드랩",
        text: "프로그래밍 언어를 단계적으로 공부 및 실습",
        img: "/assets/img/코드랩.jpg"
    },
    {
        title: "컨퍼런스",
        text: "전문적인 주제에 대한 토론 및 발표",
        img: "/assets/img/컨퍼런스.jpg"   
    }
];
const ButtonGroup = styled.div`
    display:${props=>props.itemLength>=3?"none":"flex"};
    justify-content: center;
`;

const SliderButton = styled.button`
    font-size:${fontSizes['3xl']};
    border-radius: 20%;
    width:${fontSizes['6xl']};  
    height:${fontSizes['6xl']};
    margin:0 ${space[4]};
    color:#575757;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;  
    border:none;
    font-weight:${fontWeights.bold};
    background:none;
    cursor:pointer;
    &:hover{
        cursor:pointer;
        background:#575757;
        color:${color.white};
        transition : all 0.1s ease-in-out;
    }
`;

const growthCards = () => {
    const growthCard = GDSC_GROWTH.map((growth,index) => {    
        return(
            <ThirdPageCardItem key={index}>
                <ThirdPageCardImgGroup>
                    <ThirdPageCardImg src={growth.img} alt={growth.title}/>
                </ThirdPageCardImgGroup>
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
    const GDSC_GROWTH_CLICK = GDSC_GROWTH.length-3;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const NextSlide = () =>{
        if(currentSlide>=GDSC_GROWTH_CLICK){
            setCurrentSlide(currentSlide);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    };

    const PrevSlide = () => {
        if(currentSlide === 0){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide-1);
        }
    }

    useEffect(()=>{
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide*(30+(10/6*2))}%)`;   
    },[currentSlide]);

    return(
            <>
                <ThirdPageCardItemGroup>
                    <ThirdPageCardSlideGroup ref={slideRef}>
                        {growthCards()}
                    </ThirdPageCardSlideGroup>
                </ThirdPageCardItemGroup>
                <ButtonGroup itemLength={GDSC_GROWTH.length} >
                    <SliderButton onClick={PrevSlide}>&lt;</SliderButton>
                    <SliderButton onClick={NextSlide}>&gt;</SliderButton>
                </ButtonGroup>
            </>
        )
}

export default ThirdPageCard;
