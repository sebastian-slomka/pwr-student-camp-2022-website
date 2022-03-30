import React, {useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
 } from './login-elements';

import { useAuth } from '../../context/auth-context';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/registration-form')
    } catch(err) {
        alert("Error:", err)
      setError('Failed to login')
    }
    setLoading(false)
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action='#' onSubmit={handleSubmit}>
              <FormH1>Loginto create your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' ref={passwordRef} required/>
              <FormButton type='submit'  disabled={loading}>Login</FormButton>
              <Text>Forgot password</Text>
              <Text>Need an account? <Link to="/signin">Sign Up</Link></Text>

              <Text>${error}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

    </>
  )
}

export default Login