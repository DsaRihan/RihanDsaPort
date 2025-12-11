
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index

// import React from "react";
// // Import the necessary components from the target library
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// // Import necessary CSS for the timeline to style correctly
// import "react-vertical-timeline-component/style.min.css"; 

// // Assuming you have these utility imports for styling and data
// import { styles } from "../../styles"; // For sectionSubText and sectionHeadText classes
// import { experiences } from "../../data/constants"; // Assuming your data is here
// import { SectionWrapper } from "../../hoc"; // Assuming you use an HOC for section wrapping

// // Optional: If you are not using Framer Motion (motion.div), remove this line
// import { motion } from "framer-motion";
// import { textVariant } from "../../utils/motion"; 


// // --- EXPERIENCE CARD COMPONENT ---
// // This component defines the look and content of each item in the timeline
// const ExperienceCard = ({ experience }) => (
//     <VerticalTimelineElement
//       // Card Styles
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid #232631" }}
      
//       // --- MAPPING THE DATE PROPERTY ---
//       date={experience.date} 
      
//       iconStyle={{ background: "#8064A2" }} // Use a fixed background color if iconBg isn't in data
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             // --- MAPPING THE IMAGE PROPERTY ---
//             src={experience.img} 
//             alt={experience.company}
//             className="w-[60%] h-[60%] object-contain"
//           />
//         </div>
//       }
//     >
//       {/* Card Content Header */}
//       <div>
//         {/* --- MAPPING THE ROLE PROPERTY --- */}
//         <h3 className="text-white text-[24px] font-bold">{experience.role}</h3>
//         {/* --- MAPPING THE COMPANY PROPERTY --- */}
//         <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
//           {experience.company}
//         </p>
//       </div>
  
//       {/* Card Content Points (using the 'desc' property) */}
//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {/* Display the main description point */}
//         <li className="text-white-100 text-[14px] pl-1 tracking-wider">
//           {experience.desc}
//         </li>
//         {/* Optional: Display skills as additional points if desired */}
//         {experience.skills && experience.skills.map((skill, index) => (
//           <li
//             key={`skill-${index}`}
//             className="text-white-100 text-[14px] pl-1 tracking-wider"
//           >
//             {/* You may want to prefix this to distinguish it from the main desc */}
//             • Skill: {skill} 
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );


// // --- MAIN EXPERIENCE COMPONENT ---
// const Experience = () => (
//   <>
//     {/* Section Title/Subtitle with Framer Motion variants */}
//     <motion.div variants={textVariant()}>
//       <p className={`${styles.sectionSubText} text-center`}>
//         What I have done so far
//       </p>
//       <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
//     </motion.div>

//     {/* Vertical Timeline Container */}
//     <div className="mt-20 flex flex-col">
//       <VerticalTimeline
//       >
//         {experiences.map((experience, index) => (
//           <ExperienceCard key={index} experience={experience} />
//         ))}
//       </VerticalTimeline>
//     </div>
//   </>
// );

// // If you are using a SectionWrapper Higher-Order Component (HOC)
// export default SectionWrapper(Experience, "experience");

// // If you are NOT using a SectionWrapper HOC, use this export instead:
// // export default Experience;