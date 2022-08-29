import React, {FC} from 'react';
import {Button as MuiButton} from '@mui/material';

interface ButtonProps {
    text: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({text, type = 'button'}) => (
    <MuiButton
        type={type}
        variant="outlined"
        disableRipple
        sx={{
            textTransform: 'none',
            boxShadow: '#fa73d9 0 0 6px',
            border: 'solid 2px #fa73d9',
            backgroundColor: 'transparent',
            fontSize: '.9em',
            color: '#fa73d9',
            padding: '1em 2em',
            borderRadius: '4em',
            cursor: 'pointer',
            transition: 'all .3s',
            '&:hover': {
                backgroundColor: '#fa73d9',
                color: '#222',
                border: 'solid 2px #fa73d9',
            }
        }}
    >
        {text}
    </MuiButton>
);

export default Button;
