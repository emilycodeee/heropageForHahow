import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const ButtonSet = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

const AssignArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media only screen and (max-width: 640px) {
    width: 100%;
    margin-top: 30px;
    gap: 20px;
  }
`;

const SaveButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #ececff;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 3px -2px 28px 10px rgba(236, 236, 255, 0.86);
  }
`;

export { Container, ButtonSet, AssignArea, SaveButton };
