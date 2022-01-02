import { LinkContainer } from "./style/HeroCard.style";
import { useRouteMatch, useLocation } from "react-router-dom";

const HeroCard = ({ hero }) => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const selected = pathname.slice(-1);

  return (
    <LinkContainer to={`${path}/${hero.id}`} id={hero.id} selected={selected}>
      <img src={hero.image} alt={hero.name} />
      <div> {hero.name}</div>
    </LinkContainer>
  );
};

export default HeroCard;
