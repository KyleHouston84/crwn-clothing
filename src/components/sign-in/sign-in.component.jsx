import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { toast } from "react-toastify";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData;

  const navigate = useNavigate();

  const handleChange = event => {
    const { value, name } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData({email: '', password: ''});
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Incorrect email and/or password');
    }

  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" label="email" value={email} handleChange={handleChange} required />
        <FormInput type="password" name="password" label="password" value={password} handleChange={handleChange} required />

        <div className="buttons">
          <CustomButton type="submit">Sign In</ CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</ CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn