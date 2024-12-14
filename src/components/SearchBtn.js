import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { movieDB_read_api_key } from "../config";

function SearchBtn({ searchValue }) {
  const navigate = useNavigate();

  const handleNavigate = async () => {
    const queryString = searchValue.trim();
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      queryString +
      "&include_adult=false&language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${movieDB_read_api_key}`,
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (response.ok) {
        console.log("search results: ", json.results);
        navigate("/results", { state: { results: json.results } });
      } else {
        console.error("API Error: ", json.status_message);
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
    }
  };

  return (
    <>
      <Button type="submit" onClick={handleNavigate}>
        <i className="bi bi-search"></i>
      </Button>
    </>
  );
}

export default SearchBtn;
