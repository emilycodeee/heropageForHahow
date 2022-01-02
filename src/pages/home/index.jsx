import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Profile from "./components/Profile";
import HeroCard from "./components/HeroCard";
import { heroesApi } from "../../utils/common";
import useLoading from "../../hooks/useLoading";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1560px;
  width: 100%;
  margin: 0 auto;
  margin: 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HerosList = styled.section`
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
  const [loading, setLoading] = useLoading();
  useEffect(() => {
    const fetchHerosApi = async () => {
      const res = await fetch(heroesApi.rootUrl);
      const data = await res.json();
      setHeroList(data);
      setLoading(false);
    };
    fetchHerosApi();
  }, []);

  return (
    <Container>
      {loading ? (
        <ReactLoading color=" #ececff" />
      ) : (
        <HerosList>
          {herosList.map((hero) => (
            <HeroCard hero={hero} key={hero.id} />
          ))}
        </HerosList>
      )}
      <Switch>
        <Route path="/heroes/:heroId">
          <Profile />
        </Route>
      </Switch>
    </Container>
  );
};

export default Home;
