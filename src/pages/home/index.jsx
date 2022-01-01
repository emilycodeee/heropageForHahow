import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";

const Home = () => {
  return (
    <>
      <div>LIST</div>
      <Switch>
        <Route path="/heroes/:heroId">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
