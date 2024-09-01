import React, { useState } from "react";
import styled from "styled-components";

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
  border-radius: 10px;
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