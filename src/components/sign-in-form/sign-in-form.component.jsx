import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { useState } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        case 'auth/popup-closed-by-user':
          alert('You closed the google sign in page!!');
          break;
        default: 
          console.log(error);
      }

    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type="email"
          onChange={handleChange}
          name='email'
          value={email}
          required
        />

        <FormInput
          label='password'
          type="password"
          onChange={handleChange}
          name='password'
          value={password}
          required
        />

        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google} type='button'>GOOGLE SIGN IN</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;