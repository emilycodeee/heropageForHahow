import { useParams } from "react-router";

const Profile = () => {
  const { heroId } = useParams();
  // console.log(heroId);
  return <div>{heroId}</div>;
};

export default Profile;
