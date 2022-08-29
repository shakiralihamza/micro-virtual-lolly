import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';
import {FC} from "react";
import {Box, InputLabel, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";

interface InputTextProps {
    name: string;
    label: string;
    rows?: number;
    multiline?: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    touched: boolean;
}

const CustomTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} arrow classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.error.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.error.main,
        marginTop:'20px'
    },
}));

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

const InputText: FC<InputTextProps> = ({label, error, touched, value, name, onChange, rows, multiline = false}) => {
    return (
        <CustomTooltip
            disableFocusListener
            disableHoverListener
            disableTouchListener
            PopperProps={{
                disablePortal: true,
            }}
            TransitionProps={{ timeout: 1 }}
            title={error}
            open={error !== undefined && touched}
            placement={'right-start'}
        >
            <Box component={'span'}>
                <InputLabel sx={{
                    fontSize: '.8em',
                    color: '#bbb'
                }}>
                    {label}
                </InputLabel>
                <CustomInput
                    name={name}
                    fullWidth
                    multiline={multiline}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                />
            </Box>
        </CustomTooltip>
    );
}

export default InputText;
