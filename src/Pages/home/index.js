import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import "./styles.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaStore } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href='/home'>
            <FaStore className="iconeloja" size={35} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="home" href="/home">
              Home
            </Nav.Link>
          </Nav>
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="/login" >
            Login{" "}
          </Nav.Link>
        </Navbar>
      </div>
      <div className="container mb-4">
        <div className="body mt-4">
          <div className="row">
            <div className="col-md-6">
              <img
                className="photo"
                src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/3242_C9BAF28E8A349AB0-2.jpg?w=876&h=484&crop=1"
                alt="img"
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-6 text-center mt-3">
              <p>
                <h4>ADM MARKET SYSTEM-AMS </h4  ><br /> Sistemas de gerenciamento
                administrativo AMS te proporciona a melhor experiência em
                gerenciamento do seu negócio. <br />
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.
                Todo mundo vê os porris que eu tomo litro abertis de cachacis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
