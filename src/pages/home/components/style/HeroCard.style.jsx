import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled(Link)`
  padding: 1rem;
  box-shadow: 3px -2px 28px 14px ${(props) => (props.id === props.selected ? "rgba(236, 236, 255, 0.86)" : "none")};
  z-index: ${(props) => (props.id === props.selected ? "99" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #ececff;
  &:hover {
    transform: scale(1.05);
  }
`;

export { LinkContainer };
