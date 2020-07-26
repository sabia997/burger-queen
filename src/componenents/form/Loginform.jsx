import React from 'react';
import EmailInput from './emailInput';
import PwdInput from './pwdInput';
import SubmitButton from './submitButton';

const LoginForm = () => (
    <React.Fragment>
       <EmailInput/>
       <PwdInput/>
       <SubmitButton/>
    </React.Fragment>
  );

export default LoginForm;