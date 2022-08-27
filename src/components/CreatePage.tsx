import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import Lolly from "./Lolly";
import Header from "./Header";
import FlavorSelectList from "./FlavourSelectList";
import InputForm from "./InputForm";


const CreatePage: FC = ({}) => (
    <Container maxWidth={'md'}>
        <Header/>
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{my: 5}}>
            <Grid item xs={'auto'}>
                <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
            </Grid>
            <Grid item>
                <FlavorSelectList colorTop={'#fff'} colorMiddle={'#bbb'} colorBottom={'#aaa'} onChangeTop={() => {
                }} onChangeMiddle={() => {
                }} onChangeBottom={() => {
                }}/>
            </Grid>
            <Grid item xs={6} sx={{ml: 8}}>
                <InputForm/>
            </Grid>
        </Grid>
    </Container>
);

export default CreatePage;
