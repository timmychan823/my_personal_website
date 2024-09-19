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
                        <MediaCard />
                    </Typography>
                </Box>
            </Box>

        )

    } else if (pathname == '/about' || pathname == '/' || pathname == '/dashboard') {
        return (
            <Box>
                <Avatar
                    alt="Timmy Chan"
                    src="images/1636252453239.jpeg"
                    sx={{ width: 200, height: 200, margin: "10px" }} />
                < AccordionExpandDefault />
            </Box>
        )
    }
    else {
        return (
            <div>
                {/* <div><a href="mailto:chanshunhei09@gmail.com">Contact me via Email</a></div> */}
                <Box sx={{ py: 4, display: 'flex', flexDirection: 'row', alignItems: 'left', textAlign: 'left', }}>
                    <IconButton href="mailto:chanshunhei09@gmail.com" >
                        <EmailIcon />
                    </IconButton>
                    <div>chanshunhei09@gmail.com</div>
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
