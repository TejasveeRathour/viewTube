import React, { useState } from "react";
import { BiCheckbox } from "react-icons/bi";
import styled from "styled-components";




// const Container = styled.div`
//   padding: 0;
//   margin: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: rgb(73, 84, 100); /* Deep black background */
//   backdrop-filter: blur(10px); /* Blurry background effect */

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// const FormWrapper = styled.div`
//   background: rgb(187, 191, 202); /* Netflix red for the form background */
//   padding: 40px;
//   border-radius: 10px; /* Slightly less rounded corners */
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Enhanced shadow effect */
//   width: 400px;
//   max-width: 100%;
//   backdrop-filter: blur(5px); /* Additional blur for the form container */

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: black; /* White color for better contrast */
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 15px;
//   border: 1px solid rgba(255, 255, 255, 0.5); /* Semi-transparent white border */
//   border-radius: 5px;
//   font-size: 16px;
//   color: grey; /* White text color for inputs */
//   background: rgba(255, 255, 255, 0.1); /* Slightly transparent background for inputs */
//   box-sizing: border-box;

//   &:focus {
//     outline: none;
//     border-color: black; /* White border color on focus */
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 12px;
//   background: white; /* White color for buttons */
//   color: black; /* Netflix red for button text */
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background 0.3s ease, transform 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1); /* Slightly transparent white on hover */
//     transform: translateY(-2px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const SwitchLink = styled.p`
//   text-align: center;
//   margin-top: 15px;
//   color: black; /* White color for the switch link */
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;
const Label = styled.div`
  margin-top: 10px;
`;



const Container = styled.div`
  padding: 0;
  margin:0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border:0;
  background-color: black;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SwitchLink = styled.p`
  text-align: center;
  margin-top: 15px;
  color: #3498db;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>{isLogin ? "Login" : "Sign Up"}</Title>
        <form>
          {!isLogin && <Input type="text" placeholder="Username" />}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          {!isLogin && <Input type="password" placeholder="Confirm Password" />}
          <Button type="submit">{isLogin ? "Login" : "Sign Up"}</Button>
        </form>
        <div>
        <Label><input type="checkbox"/>Remember Me</Label>
        </div>
       
        <SwitchLink onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </SwitchLink>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;