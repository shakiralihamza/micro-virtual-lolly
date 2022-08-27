import React, {FC} from 'react';
import {Typography} from "@mui/material";

interface ShinyTextProps {
    text: string;
    size: string;
    italic: boolean;
}
const ShinyText:FC<ShinyTextProps> = ({text, size, italic}) => (
    <Typography
        sx={{
            '&:hover': {
                textShadow:'#fa73d9 0 0 16px'
            },
            fontSize: size,
            fontWeight:300,
            fontStyle: italic ? 'italic' : 'normal',
            color:'#fff',
            borderBottomStyle:'none',
            textShadow:'#fa73d9 0 0 8px',
            fontFamily:'"Yellowtail", cursive',
        }}
    >
        {text}
    </Typography>
);

export default ShinyText;
