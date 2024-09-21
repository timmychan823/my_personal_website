import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Router, Navigation } from '@toolpad/core';
import MediaCard from '../../non-page/MediaCard/MediaCard.tsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar'
import AccordionExpandDefault from '../../non-page/AccordionExpandDefault/AccordionExpandDefault.tsx';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { Tooltip } from '@mui/material';
import { Stack } from '@mui/material';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

function ShowContacts() {
    return (
        <React.Fragment>
            <div>
                <IconButton href="https://www.linkedin.com/in/timmy-chan-7a087520a/" >
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/timmychan823" >
                    <GitHubIcon />
                </IconButton>
            </div>
        </React.Fragment>
    );
}


const NAVIGATION: Navigation = [
    {
        segment: 'about',
        title: 'About',
        icon: <InfoIcon />,
    },
    {
        segment: 'projects',
        title: 'Projects',
        icon: <DashboardIcon />,
    },
    {
        segment: 'contacts',
        title: 'Contacts',
        icon: <ContactMailIcon />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }: { pathname: string }) {
    if (pathname == '/projects') {
        return (
            <Box sx={{ margin: "10px" }}>
                <h1>Projects</h1>
                <Box sx={{ py: 4, display: 'flex', flexDirection: 'row', alignItems: 'left', textAlign: 'left', }}>
                    <Typography>
                        <MediaCard cardImage='images/image_0005.jpg' titleOfCardImage="Flower Classification" titleOfDescription="Flower Classification" paragraghOfDescription="This is a machine learning project which aims to explore the capabilities of different machine learning architectures eg. AlexNet, ResNet, VGG, vision transformer and swin transformer on classifying flowers into correct categories." link="https://github.com/Chanchinhung/COMP3340Project" />

                    </Typography>
                </Box>
            </Box>

        )

    } else if (pathname == '/about' || pathname == '/' || pathname == '/dashboard') {
        return (
            <Box>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} margin={2}>
                    <Avatar alt="Timmy Chan" src="images/1636252453239.jpeg" sx={{ width: 200, height: 200 }} />
                    <Stack direction="column">
                        <h1>Timmy Chan</h1>
                        <Grid container spacing={1}>
                            <Grid size={8}>
                                My Resume
                            </Grid>
                            <Grid size={1}>
                                <Tooltip title="Download Resume">
                                    <IconButton href="pdf/Public CV - Chan Shun Hei Timmy.pdf">
                                        <DownloadForOfflineIcon></DownloadForOfflineIcon>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>

                    </Stack>
                </Stack>
                < AccordionExpandDefault title={<h1>Self Introduction</h1>} content="I am a computer science student. I have the understandings of several programming languages, markup languages and database query languages, including Python, Java, Javascript, HTML, CSS, and SQL. I have a keen passion in the field of quantitative finance and software engineering. More importantly, I am a lifelong learner who keep in touch with the most up-to-date techniques and technologies in the industry." />
                < AccordionExpandDefault title={<h1>Skills</h1>} content={<Box><h2>Programming Languages</h2><Tooltip title="Python"><Box component="img" sx={{ height: 100, width: 100 }} alt="Python" src="images/python.png" /></Tooltip><Tooltip title="Java"><Box component="img" sx={{ height: 100, width: 150 }} alt="Java" src="images/java.png" /></Tooltip><Tooltip title="Javascript"><Box component="img" sx={{ height: 100, width: 100 }} alt="JavaScript" src="images/javascript.png" /></Tooltip><h2>Frameworks</h2><Tooltip title="React"><Box component="img" sx={{ height: 100, width: 100 }} alt="React" src="images/react.png" /></Tooltip><Tooltip title="SpringBoot"><Box component="img" sx={{ height: 100, width: 150 }} alt="SpringBoot" src="images/springboot.png" /></Tooltip><Tooltip title="Flask"><Box component="img" sx={{ height: 100, width: 100 }} alt="Flask" src="images/flask.png" /></Tooltip><h2>Databases</h2><Tooltip title="mongoDB"><Box component="img" sx={{ height: 100, width: 100 }} alt="mongoDB" src="images/mongoDB.png" /></Tooltip><Tooltip title="oracleDB"><Box component="img" sx={{ height: 100, width: 100, marginLeft: "25px", marginRight: "25px" }} alt="oracleDB" src="images/oracleDB.png" /></Tooltip><Tooltip title="mysql"><Box component="img" sx={{ height: 100, width: 100 }} alt="mysql" src="images/mysql.png" /></Tooltip></Box>}></AccordionExpandDefault>
                < AccordionExpandDefault title={<h1>Education</h1>} content={
                    <Stack direction="column">
                        <Stack direction="row" spacing={6} margin={2}>
                            <Tooltip title="The University of Hong Kong">
                                <Box component="img" sx={{ height: 100, width: 100 }} alt="The University of Hong Kong" src="images/hku.png" />
                            </Tooltip>
                            <Stack direction="column">
                                <Typography variant='h5'>The University of Hong Kong</Typography>
                                <Typography variant='subtitle1'>Global Engineering and Business Programme (BEng (Computer Science) and BBA (Finance))</Typography>
                                <Typography variant='caption'>Sep 2021 - Present</Typography>
                            </Stack>
                        </Stack>

                    </Stack>} />
                < AccordionExpandDefault title={< h1 > Career</h1 >} content={
                    < Stack direction="column" >

                        <Stack direction="row" spacing={6} margin={2}>
                            <Tooltip title="China Construction Bank (Asia)">
                                <Box component="img" sx={{ height: 100, width: 100 }} alt="China Construction Bank (Asia)" src="images/ccba.png" />
                            </Tooltip>
                            <Stack direction="column">
                                <Typography variant='h5'>China Construction Bank (Asia)</Typography>
                                <Typography variant='subtitle1'>Summer intern (Innovation Lab)</Typography>
                                <Typography variant='caption'>Jun 2023 - Aug 2023</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={6} margin={2}>
                            <Tooltip title="Hong Kong Monetary Authority">
                                <Box component="img" sx={{ height: 100, width: 100 }} alt="Hong Kong Monetary Authority" src="images/hkma.jpg" />
                            </Tooltip>
                            <Stack direction="column">
                                <Typography variant='h5'>Hong Kong Monetary Authority</Typography>
                                <Typography variant='subtitle1'>Placement intern (Information Technology (Digitalisation Programme Delivery))</Typography>
                                <Typography variant='caption'>Jun 2024 - Present</Typography>
                            </Stack>
                        </Stack>

                    </Stack >
                } />

            </Box >

        )
    }
    else {
        return (
            <div>
                {/* <div><a href="mailto:chanshunhei09@gmail.com">Contact me via Email</a></div> */}
                <Box sx={{ margin: "10px" }}>

                    <h1>Contacts</h1>
                    <Stack direction="row" spacing={2} margin={1}>
                        <IconButton href="https://www.linkedin.com/in/timmy-chan-7a087520a/" sx={{ padding: 0 }}>
                            <LinkedInIcon />
                        </IconButton>
                        <div>Timmy Chan</div>
                    </Stack>
                    <Stack direction="row" spacing={2} margin={1}>
                        <IconButton href="https://github.com/timmychan823" sx={{ padding: 0 }}>
                            <GitHubIcon />
                        </IconButton>
                        <div>timmychan823</div>
                    </Stack>
                    <Stack direction="row" spacing={2} margin={1}>
                        <IconButton href="mailto:chanshunhei09@gmail.com" sx={{ padding: 0 }}>
                            <EmailIcon />
                        </IconButton>
                        <div>chanshunhei09@gmail.com</div>
                    </Stack>
                </Box>

            </div>

        )
    }

}

interface DemoProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
    const { window } = props;

    const [pathname, setPathname] = React.useState('/dashboard');

    const router = React.useMemo<Router>(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: "",
                title: 'Timmy Chan',
            }}
        >
            <DashboardLayout slots={{ toolbarActions: ShowContacts }}>
                <DemoPageContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}
