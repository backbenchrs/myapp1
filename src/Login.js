import React from 'react'
import { Formik, Form, Button, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const Login = () => {
    const onSubmitHandler = () => {
        alert("Wanna Submit !")
    };
    const validationSchema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required().min(8),
    });
    return (
         
        <Formik
        initialValues={{email : "" , password : ""}}
         onSubmit = {(values) => {
            alert (JSON.stringify(values , null , 2));
         }}
         validationSchema={validationSchema}
        >
             <Form onSubmit={onSubmitHandler}>
                 <br/>
                 <br/>
                 <Field 
                type = "email"
                name = "email"
                placeholder = "Enter Your Email"/>{""}
                <ErrorMessage className='text-danger' name = "email" component="div"/>


                <br/>
                <br/>
                <Field 
                type = "password"
                name = "password"  
                placeholder = "Enter Your password"/>{""}
                <ErrorMessage className='text-danger' name = "password" component="div"/>
                <br/>
                <br/>
                <button type='Submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default Login