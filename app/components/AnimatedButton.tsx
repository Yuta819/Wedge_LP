"use client";

import React from "react";
import styled from "styled-components";

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <StyledButton onClick={onClick}>
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  position: relative;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    opacity: 0.6;
    left: -50%;
    top: -100%;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    border-radius: 40%;
    animation: wave 8s infinite linear;
  }

  .wave:nth-child(2) {
    animation-duration: 5s;
  }
  .wave:nth-child(3) {
    animation-duration: 7s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export default AnimatedButton;
