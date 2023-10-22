import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import apiNews from "../api/apiNews";

const Home = () => {
  const [posting, setPosting] = useState([]);

  const getData = async () => {
    const result = await apiNews.findall();
    console.log(result.data);
    setPosting(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="text-uppercase text-center">home</h2>
      {/* <div className="text-center">
        <Button variant="danger">Add Posting</Button>
      </div> */}
      <Row className="mt-3">
        <Col>
          {posting.map((post, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={post.imageUrl} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{post.createdAt}</small>
              </Card.Footer>
            </Card>
          ))}
        </Col>
      </Row>
      {/* <Row xs={1} md={2} className="g-4 mt-4">
        <Col>
          {posting.map((post, index) => (
            <Card key={index} style={{ width: "70rem" }} classname="d-flex justify-content-center">
              <Card.Img variant="top" src={post.imageUrl} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{post.createdAt}</small>
              </Card.Footer>
            </Card>
          ))}
        </Col>
      </Row> */}
    </div>
  );
};

export default Home;
