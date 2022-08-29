import React, {FC} from 'react';
import {Paper, Stack} from "@mui/material";
import InputText from "./InputText";
import Button from "./Button";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {nanoid} from "nanoid";
import {navigate} from "gatsby";

interface InputFormProps {
    colorTop: string;
    colorMiddle: string;
    colorBottom: string;
}

const createLolly = async (data: any) => {
    const response = await fetch('/new', {
        body: JSON.stringify(data),
        method: 'POST'
    });
    return await response.json();
};


const InputForm: FC<InputFormProps> = ({colorTop, colorBottom, colorMiddle}) => {
    return (
        <Formik
            initialValues={{to: '', from: '', message: ''}}
            validationSchema={Yup.object({

                to: Yup.string()
                    .min(2, 'Too Short!')
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),

                from: Yup.string()
                    .min(2, 'Too Short!')
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),

                message: Yup.string()
                    .min(2, 'Too Short!')
                    .required('Required')
            })}
            onSubmit={(values) => {
                const lollyID = nanoid()
                const newLolly = {...values, lollyID, colorTop, colorMiddle, colorBottom}
                createLolly(newLolly)
                    .then(() => {
                        // console.log('API response', response)
                        navigate(`/lolly/${lollyID}`)
                    })
                    .catch((error) => {
                        console.log('API error', error)
                    })
            }}
        >
            {({errors, touched, isSubmitting}) => (
                <Form>
                    <Stack alignItems={'center'} sx={{width: '100%'}} spacing={6}>
                        <Paper
                            sx={{
                                padding: '2.5em 2.5em',
                                backgroundColor: 'rgba(0,0,0,.5)',
                                boxShadow: 'rgba(0,0,0,.6) 0 0 10px',
                                width: '100%',
                            }}
                        >
                            <Stack direction={'column'} spacing={2}>
                                <Field as={InputText} name="to" label={'To'} error={errors.to} touched={touched.to}/>
                                <Field as={InputText} name="message" label={'Say something nice'} multiline
                                       rows={8} error={errors.message} touched={touched.message}/>
                                <Field as={InputText} name="from" label={'From'} touched={touched.from}
                                       error={errors.from}/>
                            </Stack>
                        </Paper>
                        <Button type={'submit'}
                                text={isSubmitting ? 'Freezing...' : 'Freeze this lolly and get a link'}/>
                    </Stack>
                </Form>
            )}
        </Formik>

    );
}

export default InputForm;
