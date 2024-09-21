import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionExpandDefault(props) {
    const { title, content } = props
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    {/* <Typography><h1>Timmy Chan</h1></Typography> */}
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {/* I am a computer science student. I have the understandings of several programming languages, markup languages and database query languages, including Python, Java, Javascript, HTML, CSS, and SQL. I have a keen passion in the field of quantitative finance and software engineering. More importantly, I am a lifelong learner who keep in touch with the most up-to-date techniques and technologies in the industry. */}
                        {content}
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}
