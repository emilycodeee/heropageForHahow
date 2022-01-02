import ReactLoading from "react-loading";

import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { heroesApi } from "../../utils/common";
import { Container, HerosList } from "./index.style";

import useLoading from "../../hooks/useLoading";

import Profile from "./components/Profile";
import HeroCard from "./components/HeroCard";

const Home = () => {
  const [herosList, setHeroList] = useState([]);
  const [loading, setLoading] = useLoading();

  useEffect(() => {
    const fetchHerosApi = async () => {
      try {
        const res = await fetch(heroesApi.rootUrl);
        const data = await res.json();
        setHeroList(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchHerosApi();
  }, []);

  return (
    <Container>
      {loading ? (
        <ReactLoading color="#ececff" />
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
