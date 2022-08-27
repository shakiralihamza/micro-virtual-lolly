import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';
import {FC} from "react";
import {Box, InputLabel} from "@mui/material";

interface InputTextProps {
    label: string;
    rows?: number;
    multiline?: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(0.5),
    },
    '& .MuiInputBase-input': {
        fontSize: '.9em',
        width: '100%',
        padding: '.4em .2em',
        margin: '0 -0.2em',
        border: 'solid 1px #fa73d9',
        color: '#fff',
        backgroundColor: '#222',
        boxShadow: '#fa73d9 0 0 6px',
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
}));

const InputText: FC<InputTextProps> = ({label,value,onChange, rows, multiline = false}) => {
    return (
        <Box component={'span'}>
            <InputLabel sx={{
                fontSize: '.8em',
                color: '#bbb'
            }}>
                {label}
            </InputLabel>
            <CustomInput
                fullWidth
                multiline={multiline}
                rows={rows}
                value={value}
                onChange={onChange}
            />
        </Box>
    );
}

export default InputText;
