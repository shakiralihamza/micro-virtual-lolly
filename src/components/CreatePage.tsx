import React, {FC} from 'react';
import {Container, Grid} from "@mui/material";
import Lolly from "./Lolly";
import Header from "./Header";
import FlavorSelectList from "./FlavourSelectList";
import InputForm from "./InputForm";


const CreatePage: FC = ({}) => {
    const [colorTop, setColorTop] = React.useState("#ff0000");
    const [colorMiddle, setColorMiddle] = React.useState("#00ff00");
    const [colorBottom, setColorBottom] = React.useState("#0000ff");

    const onChangeTop = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorTop(event.target.value);
    }
    const onChangeMiddle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorMiddle(event.target.value);
    }
    const onChangeBottom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorBottom(event.target.value);
    }
    return (
        <Container maxWidth={'md'}>
            <Header/>
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{my: 5}}>
                <Grid item xs={'auto'}>
                    <Lolly colorTop={colorTop} colorMiddle={colorMiddle} colorBottom={colorBottom}/>
                </Grid>
                <Grid item>
                    <FlavorSelectList
                        colorTop={colorTop}
                        colorMiddle={colorMiddle}
                        colorBottom={colorBottom}
                        onChangeTop={onChangeTop}
                        onChangeMiddle={onChangeMiddle}
                        onChangeBottom={onChangeBottom}
                    />
                </Grid>
                <Grid item xs={10} sm={6} sx={{ml: {xs:0, sm:8}, mt: {xs:5, sm:0}}}>
                    <InputForm colorBottom={colorBottom} colorMiddle={colorMiddle} colorTop={colorTop}/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreatePage;
