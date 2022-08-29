import React, {FC} from 'react';
import {Paper, Stack, Typography} from "@mui/material";
import {Link} from "gatsby";

interface ViewLollyDetailsProps {
    lollyURL: string;
    to: string;
    from: string;
    message: string;
}

const IDstyle = {
    color: '#fa73d9',
    padding: ".6em 1.5em",
    border: 'solid 1px #000',
    backgroundColor: '#000',
    fontFamily: '"Yellowtail", cursive',
    textAlign: 'center',
    boxShadow: 'rgba(0,0,0,.6) 0 0 10px',
}

const detailsStyle = {
    padding: '3.5em 2em',
    backgroundColor: 'rgba(0,0,0,.6)',
    boxShadow: 'rgba(0,0,0,.6) 0 0 10px',
    textAlign: 'left',
    fontStyle: 'italic',
    fontFamily: '"Yellowtail", cursive',
    fontSize: '1.1em',
    color: 'white',
    '.MuiTypography-root': {
        fontFamily: '"Yellowtail", cursive',
    }
}
const ViewLollyDetails: FC<ViewLollyDetailsProps> = ({to, lollyURL, message, from}) => (
    <Stack spacing={3}>
        <Typography variant={'body1'} sx={{color: 'white'}} textAlign={'center'}>
            Enjoy your lolly! Share it with this link:
        </Typography>
        <Paper sx={IDstyle}>
            https://project-12e-microvirtuallolly.netlify.app/{lollyURL}
        </Paper>
        <Paper sx={detailsStyle}>
            <Typography sx={{fontSize: '1.6em'}}>
                {to}
            </Typography>
            <Typography sx={{fontSize: '1.1em', mt: 5, mb: 6}}>
                {message}
            </Typography>
            <Typography sx={{fontSize: '1.6em', pl: '2em'}}>
                — {from}
            </Typography>
        </Paper>
        <Typography variant={'body2'} textAlign={'center'} px={'5px'}
                    sx={{
                        color:'rgba(255,255,255,.6)',
                        'a': {
                            color: '#eee',
                            borderBottom:'solid 1px',
                            borderBottomColor: '#f88cdd',
                            textDecoration: 'none',
                        },
                        'a:hover': {
                            borderBottomColor: '#eee',
                        }
                    }}
        >
            {from} made this virtual lollipop for you. You can <Link to={'/create'}>make your own</Link> to send to a
            friend who deserves some sugary treat which won't rot their teeth...
        </Typography>

    </Stack>
);

export default ViewLollyDetails;
