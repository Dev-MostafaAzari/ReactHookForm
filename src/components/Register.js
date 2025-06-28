import React from 'react';
import {Form, FormGroup, FormLabel} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
/*
var schema = yup.object().shape({
    email:yup.string().email("invalid Email").required("email Required"),
    password:yup.string().min(6,"at least 6 character").required("password Required"),
    repassword:yup.string().oneOf([yup.ref("password"),null],"please confirm password").required("confirm Required")
})
*/
function FormControl(){
    //var {register,handleSubmit}=useForm({resolver:yupResolver(schema)});


    return(
        <Form>
            <FormGroup>
                <FormLabel for="#email">Email</FormLabel>
                <FormControl type="text" id="email"/>
                
            </FormGroup>
        </Form>
    )
}

export default FormControl;