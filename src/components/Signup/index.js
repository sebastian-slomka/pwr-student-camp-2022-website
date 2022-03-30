import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';

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
 } from './signup-elements';

import { useAuth } from '../../context/auth-context';

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
        navigate('/registration-form')
    } catch(err) {
        alert("Error:", err)
      setError('Failed to create an account')
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
              <FormH1>Sign in to create your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' ref={emailRef} required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' ref={passwordRef} required/>
              <FormLabel htmlFor='for'>Password confirmation</FormLabel>
              <FormInput type='password' ref={passwordConfirmRef} required/>
              <FormButton type='submit'  disabled={loading}>Continue</FormButton>
              <Text>Forgot password</Text>
              <Text>${error}</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

    </>
  )
}

export default Signup