import { ButtonStyle, ButtonsContainer } from "./style/Button.style";
import { Text } from "../index.style";

import useCounter from "../../../hooks/useCounter";

const Button = ({
  ability,
  abilityScore,
  assignable,
  setAssignable,
  abilityObj,
}) => {
  const [count, incrementCounter, decrementCounter] = useCounter(
    abilityScore[ability],
    assignable,
    setAssignable
  );

  //for finalAbility collection
  abilityObj.current = { ...abilityObj.current, [ability]: count };

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
