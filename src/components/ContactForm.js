import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import { Checkbox } from 'formik-material-ui';

import * as Yup from 'yup';

 const ContactForm = () =>{

    //validation 
    const validate = Yup.object({
        email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    tigerType: Yup.string().required("Type of tiger required")
    })

    return(
        <Formik
            initialValues={{
                email: '',
                password: '',
                checkedColor: [],
                checkedAnimal: [],
                tigerType: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
            console.log(values)
            }}
        >
            {formik =>(
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">ContactForm</h1>
                    <Form>
                    <TextField label="Email" name="email" type="email" />
                    <TextField label="password" name="password" type="password" />
                    <div>Colors</div>
                    <div role="group" aria-labelledby="checkbox-group" >
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedColor" value="Blue" />
                        <img src="/images/blue.png" alt="tiger" style={{width: "30px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedColor" value="Green" />
                        <img src="/images/green.png" alt="tiger" style={{width: "30px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedColor" value="Red" />
                        <img src="/images/red.png" alt="tiger" style={{width: "30px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedColor" value="Black" />
                        <img src="/images/black.png" alt="tiger" style={{width: "30px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedColor" value="Brown" />
                        <img src="/images/brown.png" alt="tiger" style={{width: "30px"}}/>
                        </label>
                    </div>
                    <div>Animals</div>
                    <br />
                    <div role="group" aria-labelledby="checkbox-group" >
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedAnimal" value="Bear" />
                         <img src="/images/bear.png" alt="bear" style={{width: "40px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedAnimal" value="Tiger" />
                        <img src="/images/tiger.png" alt="tiger" style={{width: "40px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedAnimal" value="Snake" />
                        <img src="/images/snake.png" alt="snake" style={{width: "40px"}}/>
                        </label>  &nbsp;
                        <label>
                        <Field component={Checkbox} type="checkbox" name="checkedAnimal" value="Donkey" />
                        <img src="/images/donkey.png" alt="donkey" style={{width: "40px"}}/>
                        </label>  &nbsp;
                    </div>
                    <div>
                    <TextField label="Type of tiger" name="tigerType" type="text" />
                    </div>
                    <button className="btn btn-dark mt-3" type="submit">Register</button>&nbsp; &nbsp;
                    <button className="btn btn-danger mt-3 " type="reset">Reset</button>
                    </Form>
                </div>
                ) 
            }
        </Formik>
    )
}

export default ContactForm;