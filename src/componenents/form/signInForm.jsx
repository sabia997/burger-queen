import React from 'react';
import EmailInput from './emailInput';
import PwdInput from './pwdInput';
import SubmitButton from './submitButton';
import SelectTeam from '../form/selectTeam';

const SignInForm = () => (
    <React.Fragment>
       <EmailInput/>
       <PwdInput/>
       <SelectTeam/>
       <SubmitButton/>    
    </React.Fragment>
  );

export default SignInForm;