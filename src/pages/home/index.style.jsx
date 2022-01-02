import styled from "styled-components";

const Text = styled.div`
  line-height: 24px;
  font-size: 24px;
  font-weight: 500;
`;

const Container = styled.main`
  max-width: 1560px;
  width: 100%;
  margin: 0 auto;
  padding: 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HerosList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.4rem;
  width: 80%;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export { Text, Container, HerosList };
