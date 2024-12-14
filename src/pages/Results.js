import NavigationBar from "../components/NavigationBar";
import Body from "../components/Results/Body";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const results = location.state?.results || [];
  return (
    <>
      <NavigationBar></NavigationBar>
      <Body results={results}></Body>
    </>
  );
}

export default Results;
