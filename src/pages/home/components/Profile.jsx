import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";

import {
  Container,
  ButtonSet,
  AssignArea,
  SaveButton,
} from "./style/Profile.style";
import { Text } from "../index.style";

import { heroesApi, abilityList } from "../../../utils/common";
import ReactLoading from "react-loading";

import useLoading from "../../../hooks/useLoading";
import Button from "./Button";

const Profile = () => {
  const { heroId } = useParams();
  const [abilityScore, setAbilityScore] = useState({});
  const [assignable, setAssignable] = useState(0);
  const [loading, setLoading] = useLoading();
  //for finalAbility collection
  const abilityRef = useRef({});

  useEffect(() => {
    setLoading(true);
    const fetchProfileApi = async () => {
      try {
        const res = await fetch(
          `${heroesApi.rootUrl}/${heroId}/${heroesApi.endpoint}`
        );
        const data = await res.json();
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
      body: JSON.stringify(abilityRef.current),
    })
      .then((res) => {
        alert("儲存成功");
      })
      .catch((err) => console.error("💥", err.message));
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
                abilityObj={abilityRef}
                ability={ab}
                abilityScore={abilityScore}
                assignable={assignable}
                setAssignable={setAssignable}
              />
            ))}
          </ButtonSet>
          <AssignArea>
            <Text>剩餘點數</Text>
            <Text>{assignable}</Text>
            <SaveButton onClick={handleSave}>儲存</SaveButton>
          </AssignArea>
        </>
      )}
    </Container>
  );
};

export default Profile;
