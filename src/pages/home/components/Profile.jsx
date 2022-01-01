import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { heroesApi, abilityList } from "../../../utils/common";

import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  width: 80%;
  border: 1px solid red;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ButtonSet = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const AssignArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

const SaveButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Profile = () => {
  const { heroId } = useParams();
  const [abilityScore, setAbilityScore] = useState({});
  const [assignable, setAssignable] = useState(0);
  useEffect(() => {
    const fetchProfileApi = async () => {
      const res = await fetch(
        `${heroesApi.rootUrl}/${heroId}/${heroesApi.endpoint}`
      );
      const data = await res.json();
      setAbilityScore(data);
    };
    fetchProfileApi();
  }, [heroId]);
  console.log(heroId);
  console.log(abilityList);
  return (
    <Container>
      <ButtonSet>
        {abilityList.map((ab) => (
          <Button key={ab} ability={ab} abilityScore={abilityScore} />
        ))}
      </ButtonSet>
      <AssignArea>
        <div>剩餘點數</div>
        <div>{assignable}</div>
        <SaveButton>儲存</SaveButton>
      </AssignArea>
    </Container>
  );
};

export default Profile;
