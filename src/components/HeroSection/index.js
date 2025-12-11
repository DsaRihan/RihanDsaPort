// import React from 'react'
// import HeroBgAnimation from '../HeroBgAnimation'
// import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/Black Pattern Minimalist LinkedIn Profile Picture.jpg'
// import Typewriter from 'typewriter-effect';
// import { Bio } from '../../data/constants';

// const HeroSection = () => {
//     return (
//         <div id="about">
//             <HeroContainer>
//                 <HeroBg>
//                     <HeroBgAnimation />
//                 </HeroBg>
//                 <HeroInnerContainer >
//                 <HeroLeftContainer id="Left">
//                         <Title>Hi, I am <br /> {Bio.name}</Title>
//                         <TextLoop>
//                             I am a
//                             <Span>
//                                 <Typewriter
//                                     options={{
//                                         strings: Bio.roles,
//                                         autoStart: true,
//                                         loop: true,
//                                     }}
//                                 />
//                             </Span>
//                         </TextLoop>
//                         <SubTitle>{Bio.description}</SubTitle>
//                         <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
//                     </HeroLeftContainer>

//                     <HeroRightContainer id="Right">

//                         <Img src={HeroImg} alt="hero-image" />
//                     </HeroRightContainer>
//                 </HeroInnerContainer>

//             </HeroContainer>
//         </div>
//     )
// }

// export default HeroSection



import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    HeroRightContainer, // Kept for layout
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    TextSpan, 
    SubTitle,
    ResumeButton 
} from './HeroStyle'
// Removed HeroImg import
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

// --- ADD THE CANVAS IMPORT HERE ---
import ComputersCanvas from '../Cards/Computer'; 


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <TextSpan>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </TextSpan>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    {/* --- REPLACED PHOTO WITH CANVAS --- */}
                    <HeroRightContainer id="Right">
                        <ComputersCanvas />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection