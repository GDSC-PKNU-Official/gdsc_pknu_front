/* eslint-disable max-depth */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const IntroduceContainer = styled.div`
`;

const IntroduceWrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
`;

const SlideContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Slide = styled.div`
    position: absolute;
    display: none;
    z-index: 0;
`;

const def = {
    height: 7100,
    elements: {
        sl1: {
            top: 500,
            bottom: 1900,
            topStyle: {         // 해당 요소의 위쪽에서 시작하고자 할 때 초기화되는 스타일
                opacity: 0,
                translateY: -60,    // 기본 위치는 중앙이므로 중심에서 떨어진 거리를 뜻하게 됨
            },
            bottomStyle: {      // 해당 요소의 아래쪽에서 끝날 때 마무리되는 스타일
                opacity: 0,
                translateY: 60
            }
        },
    },
    animations: {        // 애니메이션을 적용할 요소. 애니메이션은 여러 개가 될 수 있기에 배열로 처리 
        sl1: [
            {
                top: 500,   // 시작점
                bottom: 800,    // 끝점
                easing: midSlow,    // 가운데를 느려지게 하는 Easing Function   
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60,
                    }
                }
            },
            {
                top: 500,
                bottom: 800,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            }
        ]
    }
};

const isAmong = (num, top, bottom) => num >= top && num <= bottom;

const applyStyle = (element, styleName, value, unit = "px") => {
    if (styleName === "translateY") {
        element.style.transform = `translateY(${value}${unit})`;
        return;
    }
    if (styleName === "translateX") {
        element.style.transform = `translateX(${value}${unit})`;
        return;
    }
    element.style[styleName] = value;
}

const applyStyles = (currentPos, refname, styles, r, unit = "px") => {
    for (const style of Object.keys(styles)) {
        const { topValue, bottomValue } = styles[style];
        const calc = (bottomValue - topValue) * r + topValue;
        applyStyle(this.$refs[refname], style, calc, unit);
    }
}

const applyAllAnimation = (currentPos, refname) => {
    const animations = def.animations[refname];
    if (!animations) return;
    for (const animation of animations) {
        const { top: a_top, bottom: a_bottom, easing, styles } = animation;
        const isIn = isAmong(currentPos, a_top, a_bottom);
        if (isIn) {
            if (!animation.enabled) animation.enabled = true;
        } else if (!isIn && animation.enabled) {
            if(currentPos <= a_top) {
                applyStyles(currentPos, refname, styles, 0);
            } else if (currentPos >= a_bottom) {
                applyStyles(currentPos, refname, styles, 1);
            }
            animation.enabled = false;
        }

        if (animation.enabled) {
            const r = easing((currentPos - a_top) / (a_bottom - a_top));
            this.applyStyles(currentPos, refname, styles, r);
        }
    }
}





function Introduce() {
    const [enabled, setEnabled] = useState();
    const [disabled, setDisabled] = useState();
    const stickyContainer = useRef();
    const sl1 = useRef();

    const initAnimation = () => {
        // Sticky Conainer 의 높이를 설정함.
        stickyContainer.current.style.height = `${def.height}px`;
    
        // disabled, enabled 를 비움.
        setEnabled(new Map());
        setDisabled(new Map());
    
        // 모든 요소를 disabled 에 넣음.
        for (const refname of Object.keys(def.elements)) {
          setDisabled((oldArray) => [...oldArray, (refname, def.elements[refname])]);
        }
    
        // 각 애니메이션을 enabled == false 로 만듬.
        for (const refname of Object.keys(def.animations)) {
          for (const animation of def.animations[refname]) {
            animation.enabled = false;
          }
        }
    
        // 초기 스타일 적용
        disabled.forEach((obj, refname) => {
          Object.keys(obj.topStyle).forEach((styleName) => {
            const pushValue = obj.topStyle[styleName];
            refname.current.style.styleName = pushValue;
          });
        });
        // 이미 요소의 범위 및 애니메이션의 범위에 있는 것들을 렌더링하기 위해
        // 임의로 스크롤 이벤트 핸들러를 한 번 실행시킴.
        onScroll();
    }

    const onScroll = () => {
        // 현재 스크롤 위치 파악
        const scrollTop = window.scrollY || window.pageYOffset;
        const currentPos = scrollTop + window.innerHeight / 2;  // 현재 화면의 중앙을 가리킴 
    
        // disabled 순회하며 활성화할 요소 찾기.
        disabled.forEach((obj, refname) => {
            // 만약 칸에 있다면 해당 요소 활성화
            if (isAmong(currentPos, obj.top, obj.bottom)) {
                setEnabled(refname, obj);
                refname.classList.remove("disabled");
                refname.classList.add("enabled");
                disabled.delete(refname);
            }
        });
    
        // enabled 순회하면서 해제할 요소를 체크
        enabled.forEach((obj, refname) => {
            const { top, bottom, topStyle, bottomStyle } = obj;
            console.log(`${top}, ${bottom}, ${topStyle}, ${bottomStyle}`);
            // 범위 밖에 있다면
            if (!isAmong(currentPos, top, bottom)) {
                // 위로 나갔다면 시작하는 스타일 적용
                if (currentPos <= top) {
                    Object.keys(topStyle).forEach((styleName) => {
                        applyStyle(refname, styleName, topStyle[styleName]);
                });
            }
            // 아래로 나갔다면 끝나는 스타일적용
            else if (currentPos >= bottom) {
                Object.keys(bottomStyle).forEach((styleName) => {
                    applyStyle(refname, styleName, bottomStyle[styleName]);
                    // this.$refs[refname].style[styleName] = bottomStyle[styleName];
                });
            }
    
            // 리스트에서 삭제하고 disabled로 옮김.
            disabled.set(refname, obj);
            refname.classList.remove("enabled");
            refname.classList.add("disabled");
            enabled.delete(refname);
            }
            
            // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
            else {
                applyAllAnimation(currentPos, refname);
            }
        });
    }

    const outerDivRef = useRef();
    useEffect(() => {
        initAnimation();

        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", onScroll);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", onScroll);
        }
    })    

    return (
        <IntroduceContainer ref={stickyContainer}>
            <IntroduceWrapper>
                <SlideContainer>
                    <Slide ref={sl1}>
                        Hi
                    </Slide>
                </SlideContainer>
            </IntroduceWrapper>
        </IntroduceContainer>
    )
}

export default Introduce;
