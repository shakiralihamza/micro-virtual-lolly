import React, {FC} from 'react';
import {Paper, Stack} from "@mui/material";
import InputText from "./InputText";
import Button from "./Button";

const InputForm: FC = () => (
    <Stack alignItems={'center'} sx={{width:'100%'}} spacing={6}>
        <Paper
            sx={{
                padding: '2.5em 2.5em',
                backgroundColor: 'rgba(0,0,0,.5)',
                boxShadow: 'rgba(0,0,0,.6) 0 0 10px',
                width: '100%',
            }}
        >
            <Stack direction={'column'} spacing={2}>
                <InputText label={'To'} value={''} onChange={() => {
                }}/>
                <InputText label={'From'} multiline rows={8} value={''} onChange={() => {
                }}/>
                <InputText label={'From'} value={''} onChange={() => {
                }}/>
            </Stack>
        </Paper>
        <Button text={'Freeze this lolly and get a link'} onClick={() => {
        }}/>
    </Stack>
);

export default InputForm;
