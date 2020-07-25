import React from 'react';
import EmailInput from './emailInput';
import PwdInput from './pwdInput';
import SubmitButton from './submitButton';
import SelectTeam from '../form/selectTeam';

const SignInForm = () => (
    <>
       <EmailInput/>
       <PwdInput/>
       <SelectTeam/>
       <SubmitButton/>    
    </>
  );

export default SignInForm;