import { Container, Form } from "react-bootstrap";
import SearchBtn from "./SearchBtn";
import { useEffect, useState } from "react";
import "../styles/body.css";

function Body() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // Initialize ads when the component mounts
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Ads initialization failed", e);
      }
    }

    // Clean-up ads when the component unmounts (optional)
    return () => {
      const ads = document.querySelectorAll(".adsbygoogle");
      ads.forEach((ad) => ad.remove());
    };
  }, []);

  return (
    <div className="body-container">
      <Container className="text-center">
        <div className="banner-ad mt-3">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2765975351633942"
            crossorigin="anonymous"
          ></script>
          <ins className="adsbygoogle" style={{ display: "block" }}></ins>
        </div>
        <h1>Find your next Fix!</h1>
        <div className="search-box d-flex justify-content-center">
          <Form className="">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={handleChange}
            />
          </Form>
          <SearchBtn class="searchBtn" searchValue={text}></SearchBtn>
        </div>
        <div className="ad-below-search mt-4">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2765975351633942"
            crossorigin="anonymous"
          ></script>
          <ins className="adsbygoogle" style={{ display: "block" }}></ins>
        </div>
      </Container>
    </div>
  );
}

export default Body;
