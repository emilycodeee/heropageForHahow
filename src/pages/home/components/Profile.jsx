import { useParams } from "react-router";
import React, { useEffect, useState, useRef } from "react";
import { heroesApi, abilityList } from "../../../utils/common";
import ReactLoading from "react-loading";
import useLoading from "../../../hooks/useLoading";
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
  const [loading, setLoading] = useLoading();
  const abRef = useRef({});

  useEffect(() => {
    setLoading(true);
    const fetchProfileApi = async () => {
      try {
        const res = await fetch(
          `${heroesApi.rootUrl}/${heroId}/${heroesApi.endpoint}`
        );
        const data = await res.json();
        console.log(data);
        setAbilityScore(data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchProfileApi();
  }, [heroId]);

  const handleSave = () => {
    if (assignable > 0) {
      alert("能力點分配完成才可以儲存喔！");
      return;
    }
    fetch(`${heroesApi.rootUrl}/${heroId}/${heroesApi.endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(abRef.current),
    })
      .then((res) => alert("儲存成功"))
      .catch((err) => console.log("💥", console.error(err)));
    console.log(abRef.current);
  };

  return (
    <Container>
      {loading ? (
        <ReactLoading color=" #ececff" />
      ) : (
        <>
          <ButtonSet>
            {abilityList.map((ab) => (
              <Button
                key={ab}
                refObj={abRef}
                ability={ab}
                abilityScore={abilityScore}
                assignable={assignable}
                setAssignable={setAssignable}
              />
            ))}
          </ButtonSet>
          <AssignArea>
            <div>剩餘點數</div>
            <div>{assignable}</div>
            <SaveButton onClick={handleSave}>儲存</SaveButton>
          </AssignArea>
        </>
      )}
    </Container>
  );
};

export default Profile;
