import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import SearchBtn from "./SearchBtn";
import "../styles/components.css";

function NavigationBar() {
  return (
    <>
      <Navbar className="custom-nav bg-black">
        <Container fluid>
          <div className="d-flex justify-content-center w-100 position-relative">
            <Navbar.Brand href="/">What's Next</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="navbar-search" />
          <Navbar.Collapse className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <SearchBtn></SearchBtn>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
