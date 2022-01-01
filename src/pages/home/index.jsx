import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Profile from "./components/Profile";
import HeroCard from "./components/HeroCard";
import { heroesApi } from "../../utils/common";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1560px;
  width: 100%;
  margin: 0 auto;
  margin: 10% 0;
  /* border: 1px solid #ececff; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HerosList = styled.section`
  /* padding: 1rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.4rem;
  width: 80%;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  const [herosList, setHeroList] = useState([]);
  useEffect(() => {
    const fetchHerosApi = async () => {
      const res = await fetch(heroesApi.rootUrl);
      const data = await res.json();
      setHeroList(data);
    };
    fetchHerosApi();
  }, []);

  return (
    <Container>
      <HerosList>
        {herosList.map((hero) => (
          <HeroCard hero={hero} key={hero.id} />
        ))}
      </HerosList>
      <Switch>
        <Route path="/heroes/:heroId">
          <Profile />
        </Route>
      </Switch>
    </Container>
  );
};

export default Home;
