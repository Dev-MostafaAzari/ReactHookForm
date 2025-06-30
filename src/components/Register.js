import React, { useState } from 'react';
import { Col, Container, Form, Row, FormLabel, FormGroup, FormControl, Button, ButtonGroup, Alert, InputGroup } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Register.css";
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

var schema = yup.object().shape({
    email: yup.string().email("invalid Email!").required("email Required!"),
    password: yup.string().matches(/(?=.*[!@#$])(?=.*[A-Z])(?=.{6})[(A-Za-z0-9)]+/, "invalid password!").required("password Required!"),
    repassword: yup.string().oneOf([yup.ref("password"), null], "Password incorect!").required("please confirm your password!"),
    phoneNumber : yup.string().matches(/^09\d{9}/,"invalid number!").required("please enter your number!")
})

function FormValidation() {
    var { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    var [alert, setAlert] = useState(false)
    function closeAlert(){
        setAlert(false)
    }
    function valid() {
        setAlert(true)
    }
    return (
        <>
            <Alert show={alert} id="alert">
                <div id="alertcon">
                    <Button className="btn-close" onClick={closeAlert} />
                    <p>Register Success!</p>
                </div>
            </Alert>
            <Container>
                <Row>
                    <Col id="RegisterCol">
                        <Form id="Form" onSubmit={handleSubmit(valid)}>
                            <FormLabel>Register Panel</FormLabel>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupText>Gmail</InputGroupText>
                                    <FormControl type="text" id="Gmail" placeholder="example: abc@gmail.com" {...register('email')} />
                                </InputGroup>                             
                                <span>{errors.email?.message}</span>
                                <InputGroup>
                                    <InputGroupText>Password</InputGroupText>
                                    <FormControl type="password" id="Password" placeholder="example: eaZ126!" {...register("password")} />
                                </InputGroup>
                                <span>{errors.password?.message}</span>
                                <InputGroup>
                                    <InputGroupText>Repassword</InputGroupText>
                                    <FormControl type="password" id="RePassword" placeholder="" {...register("repassword")} />
                                </InputGroup>
                                <span>{errors.repassword?.message}</span>
                                <InputGroup>
                                    <InputGroupText>Number</InputGroupText>
                                    <FormControl type="text" id="pnumber" placeholder="example: 09123456789" {...register("phoneNumber")}/>
                                </InputGroup>
                                <span>{errors.phoneNumber?.message}</span>
                            </FormGroup>
                            <ButtonGroup>
                                <Button type="submit">Register</Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )

}

export default FormValidation;