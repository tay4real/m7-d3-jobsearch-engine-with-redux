import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const NavBar = (props) => {
  console.log(props.favJobs.length);
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link
            to="/"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            Job Hunt
          </Link>
        </Navbar.Brand>

        <div className="ml-auto">
          <Button
            color="primary"
            onClick={() => props.history.push("/favorite-jobs")}
          >
            <FontAwesomeIcon icon={faHeart} id="favIcon" /> Favorites
            <span className="ml-2">{props.favJobs.length}</span>
          </Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default withRouter(connect(mapStateToProps)(NavBar));
