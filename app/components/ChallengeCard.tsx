"use client";

import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  description: string;
  solution: string;
  position: "left" | "right";
  icon: IconType;
}

const ChallengeCard: React.FC<CardProps> = ({
  title,
  description,
  solution,
  position,
  icon: Icon,
}) => {
  return (
    <StyledWrapper position={position}>
      <ul>
        <li>
          <div className="card-inner">
            <div className="front">
              <StyledIcon>
                <Icon />
              </StyledIcon>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="back">
              <h3>解決策</h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {solution}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ position: "left" | "right" }>`
  ul {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: ${(props) =>
        props.position === "left" ? "flex-start" : "flex-end"};
    }
  }

  ul li {
    list-style: none;
    margin: 0;
    width: 260px;
    height: 300px;
    transition: all 0.5s;
    transform: rotate(-15deg) skew(15deg);
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    perspective: 1000px;

    @media (min-width: 768px) {
      width: 280px;
      height: 320px;
      transform: ${(props) =>
        props.position === "left"
          ? "rotate(-15deg) skew(15deg) translate(0,0)"
          : "rotate(15deg) skew(-15deg) translate(0,0)"};
      box-shadow: ${(props) =>
        props.position === "left"
          ? "-15px 15px 10px rgba(0,0,0,.5)"
          : "15px 15px 10px rgba(0,0,0,.5)"};
    }

    @media (min-width: 1024px) {
      width: 300px;
      height: 360px;
    }
  }

  ul li:hover {
    transform: rotate(-15deg) skew(15deg) translate(5px, -5px);
    box-shadow: -30px 30px 30px rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) {
      transform: ${(props) =>
        props.position === "left"
          ? "rotate(-15deg) skew(15deg) translate(5px,-5px)"
          : "rotate(15deg) skew(-15deg) translate(-5px,-5px)"};
      box-shadow: ${(props) =>
        props.position === "left"
          ? "-30px 30px 30px rgba(0,0,0,.5)"
          : "30px 30px 30px rgba(0,0,0,.5)"};
    }
  }

  ul li:before,
  ul li:after {
    content: "";
    position: absolute;
    background: #444;
    transition: all 0.5s;
  }

  ul li:before {
    width: 20px;
    height: 100%;
    top: 10px;
    left: -20px;
    transform: rotate(0deg) skewY(-45deg);

    @media (min-width: 768px) {
      left: ${(props) => (props.position === "left" ? "-20px" : "auto")};
      right: ${(props) => (props.position === "right" ? "-20px" : "auto")};
      transform: ${(props) =>
        props.position === "left"
          ? "rotate(0deg) skewY(-45deg)"
          : "rotate(0deg) skewY(45deg)"};
    }
  }

  ul li:after {
    width: 100%;
    height: 20px;
    bottom: -20px;
    left: -10px;
    transform: rotate(0deg) skewX(-45deg);

    @media (min-width: 768px) {
      left: ${(props) => (props.position === "left" ? "-10px" : "auto")};
      right: ${(props) => (props.position === "right" ? "-10px" : "auto")};
      transform: ${(props) =>
        props.position === "left"
          ? "rotate(0deg) skewX(-45deg)"
          : "rotate(0deg) skewX(45deg)"};
    }
  }

  ul li:hover:before,
  ul li:hover:after {
    background: #0077a3;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  ul li:hover .card-inner {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background: #333;
    color: #fff;
  }

  .back {
    background: #00aced;
    transform: rotateY(180deg);
  }

  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    width: 100%;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.3rem;
      margin-bottom: 0.9rem;
    }
  }

  p {
    font-size: 0.875rem;
    text-align: left;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 0.95rem;
    }

    @media (min-width: 1024px) {
      font-size: 1rem;
    }
  }
`;

const StyledIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #00aced;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;

  ul li:hover & {
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export default ChallengeCard;
