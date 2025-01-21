"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

interface RequestButtonProps {
  onClick?: () => void;
}

const RequestButton: React.FC<RequestButtonProps> = () => {
  const router = useRouter();

  const handleOpenModal = () => {
    // Use URL hash to control modal state
    window.history.pushState(null, "", "/#modal");
    // Trigger a hashchange event
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <StyledButtonWrapper>
      <StyledButtonContainer>
        <StyledButton onClick={handleOpenModal}>無料相談</StyledButton>
      </StyledButtonContainer>
      <StyledWaveContainer>
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </StyledWaveContainer>
    </StyledButtonWrapper>
  );
};

const StyledButtonWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  z-index: 60;
  overflow: visible;

  @media (min-width: 640px) {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 1024px) {
    width: 140px;
    height: 140px;
  }
`;

const StyledButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWaveContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  pointer-events: none;
  z-index: 50;
  overflow: visible;

  @media (min-width: 640px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    left: 0;
    top: 0;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .wave1 {
    animation-duration: 3s;
  }
  .wave2 {
    animation-duration: 4s;
    opacity: 0.4;
  }
  .wave3 {
    animation-duration: 5s;
    opacity: 0.2;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #5b42f3;
  font-weight: bold;
  font-size: 12px;
  position: relative;
  z-index: 70;

  @media (min-width: 640px) {
    width: 75px;
    height: 75px;
    font-size: 13px;
  }

  @media (min-width: 1024px) {
    width: 90px;
    height: 90px;
    font-size: 14px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default RequestButton;
