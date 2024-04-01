import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import "./TimeLine.css"
const TimeLine = () => {
    return (
        <div className='time-line-container'>
           <Timeline position="alternate">
            {/* ssc  */}
                <TimelineItem> 
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        style={{color:"#FFB400", fontWeight:"500"}}
                        >
                        2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot style={{backgroundColor:"#FFB400"}}>
                                <SchoolIcon />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            SSC
                        </Typography>
                        <Typography>
                            Aliahmed School and College <br/>
                            GPA : 5.00
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                {/* HSC  */}
                <TimelineItem> 
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        style={{color:"#FFB400", fontWeight:"500"}}
                        >
                        2018 - 2019
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot style={{backgroundColor:"#FFB400"}}>
                                <SchoolIcon />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            HSC
                        </Typography>
                        <Typography>
                            Quality Education College <br/>
                            GPA : 3.67
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                {/* CSE  */}
                <TimelineItem> 
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        style={{color:"#FFB400", fontWeight:"500"}}
                        >
                        2020 - 2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot style={{backgroundColor:"#FFB400"}}>
                                <SchoolIcon />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            CSE
                        </Typography>
                        <Typography>
                            University of Development Alternative <br/>
                            CGPA : 3.57
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
           </Timeline>
        </div>
    );
};

export default TimeLine;