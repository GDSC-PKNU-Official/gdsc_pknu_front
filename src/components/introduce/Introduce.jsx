/* eslint-disable max-depth */
import React, { useEffect, useRef, useState } from 'react';
import bezierEasing from "https://cdn.skypack.dev/bezier-easing@2.1.0";
import { slideText } from './IntroduceSlideText';
import styled, { keyframes } from 'styled-components';
import IntroGDSC from './IntroGDSC';
import { fontSizes, fontWeights } from '../../styles/font';
import space from '../../styles/space';
import { Link } from 'react-router-dom';

const upDown = keyframes`
    from{
      transform: translatey(-20px);
    }
    to{
      transform: translatey(0px);
    }
`;

const changeBackground = keyframes`
    from {
      background-color: white;
    }
    to {
      background-color: rgb(32, 33, 36);
    }
`;

const IntroduceContainer = styled.div`
    white-space: pre-wrap;
    font-size: ${fontSizes['7xl']};
    background-color: rgb(32, 33, 36);
    animation: ${changeBackground} 1s alternate;
    color: white;
`;

const IntroduceWrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
`;

const IntroGDSCWrapper = styled.div`
`;

const SlideContainer = styled.div`
    font-family: 'googleSansDisplayRegular';
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Slide = styled.div`
    position: absolute;
    display: block;
    z-index: 0;
    margin: 0;
    font-size: 45px;
    font-weight: bold;
    line-height: 1.35;
    letter-spacing: -1.5px;
    word-spacing: 1.5px;
    text-align: center;
`;

const GoHomeSlide = styled.div`
    z-index: 1;
    margin-bottom: 900px;
    &: hover {
      cursor: pointer;
    }
`;

const Text = styled.div`
`;

const SlText = styled.div`
    margin-bottom: 700px;
`;

const SmallText = styled.div`
  margin-top: ${space[10]};
  font-size: ${fontSizes['5xl']};
  font-weight: ${fontWeights.normal};
`;

const Scdown = styled.div`
    position: fixed;
    padding: 40px 0;
    animation: ${upDown} 1.4s infinite ease-in-out;
    width: 100%;
    height: 50px;
    text-align: center;
    bottom: 20px;
`;

const ScdownImg = styled.div`
  position: absolute;
  left: 50%;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
`;
      
const Img = styled.img`
    width: 700px;
    height: 500px;
    margin-left: 30px;
    clip: rect(0, 200px, 200px, 0);
`;

const GDSCImg = styled.img`
    width: 100px;
    height: 50px;
`;

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const linear = bezierEasing(1,1,1,1);
let arr;

const def = {
    height: 16000,
    elements: {
        gdscLogo: {
          top: 0,
          bottom: 900,
          topStyle: {
            opacity: 1
          },
          bottomStyle: {
            opacity: 0
          },
        },
        goHome: {
          top: 900,
          bottom: 16000,
          topStyle: {
            opacity: 0
          },
          bottomStyle: {
            opacity: 1
          }
        },
        sl1: {
            top: 900,
            bottom: 2300,
            topStyle: {         // 해당 요소의 위쪽에서 시작하고자 할 때 초기화되는 스타일
                opacity: 0,
                translateY: -60,    // 기본 위치는 중앙이므로 중심에서 떨어진 거리를 뜻하게 됨
            },
            bottomStyle: {      // 해당 요소의 아래쪽에서 끝날 때 마무리되는 스타일
                opacity: 0,
                translateY: 60
            }
        },
        scdown: {
            top: 0,
            bottom: 9500,
            topStyle: {
              opacity: 1
            },
            bottomStyle: {
              opacity: 0
            },
        },
        sl2: {
            top: 2400,
            bottom: 3700,
            topStyle: {
              opacity: 0,
              translateY: -60
            },
            bottomStyle: {
              opacity: 0,
              translateY: 60
            }
        },
          sl3_1: {
            top: 3800,
            bottom: 6000,
            topStyle: {
              opacity: 0
            },
            bottomStyle: {
              opacity: 0
            }
        },
        sl3_2: {
          top: 4100,
          bottom: 6000,
          topStyle: {
            opacity: 0
          },
          bottomStyle: {
            opacity: 0
          }
        },
        sl3_3: {
          top: 4400,
          bottom: 6000,
          topStyle: {
            opacity: 0
          },
          bottomStyle: {
            opacity: 0
          }
      },
      sl3_4: {
        top: 4700,
        bottom: 6000,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
    },
      sl_Img_Text: {
        top: 6100,
        bottom: 13700,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img1: {
        top: 6100,
        bottom: 7700,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img2: {
        top: 7300,
        bottom: 8900,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img3: {
        top: 8500,
        bottom: 10100,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img4: {
        top: 9700,
        bottom: 11300,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img5: {
        top: 10900,
        bottom: 12500,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      },
      sl_Img6: {
        top: 12100,
        bottom: 13700,
        topStyle: {
          opacity: 0
        },
        bottomStyle: {
          opacity: 0
        }
      }
    },
    animations: {        // 애니메이션을 적용할 요소. 애니메이션은 여러 개가 될 수 있기에 배열로 처리 
        gdscLogo: [
          {
            top: 700,
            bottom: 900,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        goHome: [
          {
            top: 900,
            bottom: 1200,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top: 13500,
            bottom: 16000,
            easing: linear,
            styles: {
              translateY: {
                topValue: 0,
                bottomValue: 450,
              }
            }
          }
        ],
        sl1: [
            {
                top: 900,   // 시작점
                bottom: 2300,    // 끝점
                easing: midSlow,    // 가운데를 느려지게 하는 Easing Function   
                styles: {
                    translateY: {
                        topValue: 60,
                        bottomValue: -60,
                    }
                }
            },
            {
                top: 900,
                bottom: 1200,
                easing: ease,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 1800,
                bottom: 2300,
                easing: easeIn,
                styles: {
                  opacity: {
                    topValue: 1,
                    bottomValue: 0
                  }
                }
            },
        ],
        scdown: [
            {
              top: 9000,
              bottom: 9500,
              easing: easeIn,
              styles: {
                opacity: {
                  topValue: 1,
                  bottomValue: 0
                }
              }
            }
          ],
        sl2: [
            {
              top: 2400,
              bottom: 3700,
              easing: midSlow,
              styles: {
                translateY: {
                  topValue: 60,
                  bottomValue: -60
                }
              }
            },
            {
              top: 2400,
              bottom: 3000,
              easing: ease,
              styles: {
                opacity: {
                  topValue: 0,
                  bottomValue: 1
                }
              }
            },
            {
              top: 3100,
              bottom: 3700,
              easing: easeIn,
              styles: {
                opacity: {
                  topValue: 1,
                  bottomValue: 0
                }
              }
            }
          ],
          sl3_1: [
            {
              top: 3800,
              bottom: 6000,
              easing: midSlow,
              styles: {
                translateY: {
                  topValue: 60,
                  bottomValue: -60
                }
              }
            },
            {
              top: 3800,
              bottom: 4400,
              easing: ease,
              styles: {
                opacity: {
                  topValue: 0,
                  bottomValue: 1
                }
              }
            },
            {
              top: 5500,
              bottom: 6000,
              easing: easeIn,
              styles: {
                opacity: {
                  topValue: 1,
                  bottomValue: 0
                }
              }
            }
        ],
        sl3_2: [
          {
            top: 4100,
            bottom: 6000,
            easing: midSlow,
            styles: {
              translateY: {
                topValue: 60,
                bottomValue: -60
              }
            }
          },
          {
            top: 4100,
            bottom: 4400,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top: 5500,
            bottom: 6000,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl3_3: [
          {
            top: 4400,
            bottom: 6000,
            easing: midSlow,
            styles: {
              translateY: {
                topValue: 60,
                bottomValue: -60
              }
            }
          },
          {
            top: 4400,
            bottom: 4700,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top: 5500,
            bottom: 6000,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl3_4: [
          {
            top: 4700,
            bottom: 6000,
            easing: midSlow,
            styles: {
              translateY: {
                topValue: 60,
                bottomValue: -60
              }
            }
          },
          {
            top: 4700,
            bottom: 5100,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top: 5500,
            bottom: 6000,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img_Text: [
          {
            top: 6100,
            bottom: 6300,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top: 13200,
            bottom: 13700,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img1: [
          {
            top: 6100,
            bottom: 7700,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 6100,
            bottom: 6500,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:7300,
            bottom: 7700,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img2: [
          {
            top: 7300,
            bottom: 8900,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 7300,
            bottom: 7700,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:8500,
            bottom: 8900,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img3: [
          {
            top: 8500,
            bottom: 10100,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 8500,
            bottom: 8900,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:9700,
            bottom: 10100,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img4: [
          {
            top: 9700,
            bottom: 11300,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 9700,
            bottom: 10100,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:10900,
            bottom: 11300,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img5: [
          {
            top: 10900,
            bottom: 12500,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 10900,
            bottom: 11400,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:12100,
            bottom: 12500,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
        sl_Img6: [
          {
            top: 12100,
            bottom: 13700,
            easing: linear,
            styles: {
              translateX: {
                topValue: 500,
                bottomValue: -500,
              }
            }
          },
          {
            top: 12100,
            bottom: 12500,
            easing: ease,
            styles: {
              opacity: {
                topValue: 0,
                bottomValue: 1
              }
            }
          },
          {
            top:13200,
            bottom: 13700,
            easing: easeIn,
            styles: {
              opacity: {
                topValue: 1,
                bottomValue: 0
              }
            }
          }
        ],
    }
};

const isAmong = (num, top, bottom) => num >= top && num <= bottom;

const applyStyle = (element, styleName, value, unit = "px") => {
    if (styleName === "translateY") {
        element.current.style.transform = `translateY(${value}${unit})`;
        return;
    }
    if (styleName === "translateX") {
        element.current.style.transform = `translateX(${value}${unit})`;
        return;
    }
    element.current.style[styleName] = value;
}

const applyStyles = (currentPos, refname, styles, r, unit = "px") => {
    for (const style of Object.keys(styles)) {
        const { topValue, bottomValue } = styles[style];
        const calc = (bottomValue - topValue) * r + topValue;
        applyStyle(arr.get(refname), style, calc, unit);
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
            applyStyles(currentPos, refname, styles, r);
        }
    }
}
            
// const imgSource = [
//   "retrospect.jpg", "techTalk.jpg", "onBoarding.png", "ideaThon.png", "hackerThon.png", "MT.png"
// ]

// const images = () => {
//   const image = imgSource.map(img => {
//       const source = `/assets/slide/${img}`;
//       return (
//           <Img src={process.env.PUBLIC_URL + source} key={img} />
//       )
//   })
//   console.log(image);
//   return image;
// }

let enabled = new Map();
let disabled = new Map();

function Introduce() {
    const [loading, setLoading] = useState(true);
    let lastScrollY = 0;
    
    const gdscLogo = useRef();
    const stickyContainer = useRef();
    const goHome = useRef();
    const sl1 = useRef();
    const sl2 = useRef();
    const sl3_1 = useRef();
    const sl3_2 = useRef();
    const sl3_3 = useRef();
    const sl3_4 = useRef();
    const scdown = useRef();
    const sl_Img_Text = useRef();
    const sl_Img1 = useRef();
    const sl_Img2 = useRef();
    const sl_Img3 = useRef();
    const sl_Img4 = useRef();
    const sl_Img5 = useRef();
    const sl_Img6 = useRef();

    arr = new Map([
        ['goHome', goHome],
        ['gdscLogo', gdscLogo],
        ['sl1', sl1],
        ['sl2', sl2],
        ['sl3_1',sl3_1],
        ['sl3_2',sl3_2],
        ['sl3_3',sl3_3],
        ['sl3_4',sl3_4],
        ['scdown', scdown],
        ['sl_Img_Text', sl_Img_Text],
        ['sl_Img1', sl_Img1],
        ['sl_Img2', sl_Img2],
        ['sl_Img3', sl_Img3],
        ['sl_Img4', sl_Img4],
        ['sl_Img5', sl_Img5],
        ['sl_Img6', sl_Img6],
    ]);

    const initAnimation = () => {
        // Sticky Conainer 의 높이를 설정함.
        setTimeout(() => {
          stickyContainer.current.style.height = `${def.height}px`;
        }, 4000);
    
        // disabled, enabled 를 비움.
        disabled.clear();
        enabled.clear();
    
        // 모든 요소를 disabled 에 넣음.
        for (const refname of Object.keys(def.elements)) {
            disabled.set(refname, def.elements[refname]);
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
            arr.get(refname).current.style[styleName] = pushValue;
            // refname.current.style.styleName = pushValue;
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
        if(scrollTop < 900) {
          if(scrollTop < lastScrollY) {
            return;
          }
        lastScrollY = scrollTop;
        }
          
        // disabled 순회하며 활성화할 요소 찾기.
        disabled.forEach((obj, refname) => {
            // 만약 칸에 있다면 해당 요소 활성화
            if (isAmong(currentPos, obj.top, obj.bottom)) {
                enabled.set(refname, obj);
                // arr.get(refname).classList.remove("disabled");
                // arr.get(refname).classList.add("enabled");
                arr.get(refname).current.style.display = 'block';
                disabled.delete(refname);
            }
        });
        // enabled 순회하면서 해제할 요소를 체크
        enabled.forEach((obj, refname) => {
            const { top, bottom, topStyle, bottomStyle } = obj;
            // 범위 밖에 있다면
            if (!isAmong(currentPos, top, bottom)) {
                // 위로 나갔다면 시작하는 스타일 적용
                if (currentPos <= top) {
                    Object.keys(topStyle).forEach((styleName) => {
                        applyStyle(arr.get(refname), styleName, topStyle[styleName]);
                });
            }
            // 아래로 나갔다면 끝나는 스타일적용
            else if (currentPos >= bottom) {
                Object.keys(bottomStyle).forEach((styleName) => {
                    applyStyle(arr.get(refname), styleName, bottomStyle[styleName]);
                });
            }
    
            // 리스트에서 삭제하고 disabled로 옮김.
            if(refname!=='gdscLogo')
              disabled.set(refname, obj);
            arr.get(refname).current.style.display = 'none';
            enabled.delete(refname);
            }
            
            // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
            else {
                applyAllAnimation(currentPos, refname);
            }
        });
    }

    useEffect(() => {
      initAnimation();
      setTimeout(() => {
          setLoading(false);
        }, 4000);

        window.addEventListener('scroll', onScroll);
        return () => {
            window.addEventListener('scroll', onScroll);
        }
    })    

    return (
        <IntroduceContainer ref={stickyContainer}>
            <IntroduceWrapper>
            <SlideContainer>
              <IntroGDSCWrapper ref={gdscLogo}>
                <IntroGDSC />
              </IntroGDSCWrapper>
              <Scdown ref={scdown}>
                  {
                    !loading ? 
                    (<ScdownImg>
                    </ScdownImg>) : null
                  }
              </Scdown>
              <GoHomeSlide ref={goHome}>
                  <Link to="/">
                    <GDSCImg src={process.env.PUBLIC_URL + '/assets/logo/GDSC_Logo.svg'} />
                  </Link>
              </GoHomeSlide>
                <Slide ref={sl1}>
                  {slideText[0].text}
                </Slide>
              <Slide ref={sl2}>
                {slideText[1].text}
              </Slide>
              <Slide>
                  <Text ref={sl3_1}>
                  {slideText[2].text}
                  </Text>
                <SmallText ref={sl3_2}>
                  {slideText[3].text}
                </SmallText>
                <SmallText ref={sl3_3}>
                  {slideText[4].text}
                </SmallText>
                <SmallText ref={sl3_4}>
                  {slideText[5].text}
                </SmallText>
              </Slide>
              <Slide ref={sl_Img_Text}>
                <SlText>
                  주요활동
                </SlText>
              </Slide>
              <Slide ref={sl_Img1}>
                  <Img src="/assets/slide/retrospect.jpg" />
              </Slide>
              <Slide ref={sl_Img2}>
                    <Img src="/assets/slide/techTalk.jpg" />
              </Slide>
              <Slide ref={sl_Img3}>
                    <Img src="/assets/slide/onBoarding.png" />
              </Slide>
              <Slide ref={sl_Img4}>
                    <Img src="/assets/slide/ideaThon.png" />
              </Slide>
              <Slide ref={sl_Img5}>
                    <Img src="/assets/slide/hackerThon.png" />
              </Slide>
              <Slide ref={sl_Img6}>
                    <Img src="/assets/slide/MT.png" />
              </Slide>
            </SlideContainer>
        </IntroduceWrapper>
      </IntroduceContainer>
    )
}

export default Introduce;
