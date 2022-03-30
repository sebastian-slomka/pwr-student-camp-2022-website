import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { db } from '../../api/firebase'

import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';

import Textfield from '../FormsUi/Textfield'
import Button from '../FormsUi/Button'

import { useAuth } from '../../context/auth-context';
import Navbar from '../Navbar'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from '../Navbar/navbar-elements'

const RegistrationForm = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const useStyles = makeStyles((theme) => ({
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  }))

  function handleFirestore(values) {
    db.collection("RegistrationForm").add(values)
  }

  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  const FORM_VALIDATION = Yup.object().shape( {
    firstName: Yup.string().required('Reqiuired'),
    lastName: Yup.string().required('Reqiuired'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().integer().typeError('Enter valid phone number').required('Required')
  })

  const classes = useStyles();

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <Grid container >
      <Grid item xs={12}>
      <Nav>
        <NavbarContainer>
          <NavBtn>
            <NavBtnLink to='/' onClick={handleLogout}>Wyloguj</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {handleFirestore(values)}}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName"
                      label="First Name" />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="lastName"
                    label="Last Name"/>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="email"
                      label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield name="phone"
                    label="Phone"/>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Booking information
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      Submit form
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default RegistrationForm