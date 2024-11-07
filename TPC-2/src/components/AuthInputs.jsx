import { useState } from 'react';
import Input from './input';



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-full max-w-lg p-8 mx-auto rounded-lg shadow-md bg-gradient-to-b from-[#bdd5ed] to-[#1d0aeca9] text-black py-2">
      <div className='flex flex-col mb-8'>
        <Input
          label = "Email"
          type = "email"
          onChange = {(event) => handleInputChange('email', event.target.value)}
          hasError ={emailNotValid}
        />

        <Input
          label = "Password"
          type = "password"
          onChange = {(event) => handleInputChange('password', event.target.value)}
          hasError ={passwordNotValid}
        />

      </div>
      <div className=" flex gap-4 justify-end py-4">
        <button type="button" className="text-[#f3efe6] hover:text-[#f0920e]">
          Create a new account
        </button>
        <button className="px-8 py-4 font-semibold uppercase rounded bg-[#f0b322] text-gray-800 hover:bg-[#f0920e]" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}