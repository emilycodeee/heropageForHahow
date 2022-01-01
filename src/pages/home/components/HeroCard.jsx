import styled from "styled-components";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { heroesApi } from "../../../utils/common";

const LinkContainer = styled(Link)`
  padding: 1rem;
  border: 1px solid
    ${(props) => (props.id === props.selected ? "red" : "orange")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const HeroCard = ({ hero }) => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const selected = pathname.slice(-1);

  return (
    <LinkContainer to={`${path}/${hero.id}`} id={hero.id} selected={selected}>
      <img src={hero.image} />
      <div> {hero.name}</div>
    </LinkContainer>
  );
};

export default HeroCard;
