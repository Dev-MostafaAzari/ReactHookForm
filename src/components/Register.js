import React, { useState } from 'react';
import { Col, Container, Form, Row, FormLabel, FormGroup, FormControl, Button, ButtonGroup, Alert } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Register.css";

var schema = yup.object().shape({
    email: yup.string().email("invalid Email").required("email Required"),
    password: yup.string().min(6, "at least 6 character").required("password Required"),
    repassword: yup.string().oneOf([yup.ref("password"), null], "Password incorect!").required("please confirm your password!")
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
                                <FormControl type="text" id="Gmail" placeholder="Gmail" {...register('email')} />
                                <span>{errors.email?.message}</span>
                                <FormControl type="password" id="Password" placeholder="Password" {...register("password")} />
                                <span>{errors.password?.message}</span>
                                <FormControl type="password" id="RePassword" placeholder="RePassword" {...register("repassword")} />
                                <span>{errors.repassword?.message}</span>
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