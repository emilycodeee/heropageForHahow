import styled from "styled-components";
import useCounter from "../../../hooks/useCounter";

const ButtonStyle = styled.button`
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Eina01, sans-serif;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 64px;
  word-break: keep-all;
  z-index: 0;

  &:before {
    border-radius: 80px;
    background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }

  &:after {
    border-radius: 80px;
    background-color: initial;
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }
  &:hover:not(:disabled):before {
    background: linear-gradient(
      92.83deg,
      rgb(255, 116, 38) 0%,
      rgb(249, 58, 19) 100%
    );
  }

  &:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  &:active:not(:disabled) {
    color: #ccc;
  }

  &:active:not(:disabled):before {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2)
      ),
      linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  }

  &:active:not(:disabled):after {
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }

  &:disabled {
    cursor: default;
    opacity: 0.24;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  line-height: 24px;
  font-size: 24px;
`;

const Button = ({
  ability,
  abilityScore,
  assignable,
  setAssignable,
  refObj,
}) => {
  const [count, incrementCounter, decrementCounter] = useCounter(
    abilityScore[ability],
    assignable,
    setAssignable
  );

  refObj.current = { ...refObj.current, [ability]: count };

  return (
    <ButtonsContainer>
      <Text>{ability.toUpperCase()}</Text>
      <ButtonStyle onClick={incrementCounter}> + </ButtonStyle>
      <Text> {count} </Text>
      <ButtonStyle onClick={decrementCounter}>-</ButtonStyle>
    </ButtonsContainer>
  );
};

export default Button;
