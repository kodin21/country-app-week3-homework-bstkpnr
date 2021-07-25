import React, { useState,useEffect } from "react";
import axios from 'axios'
import {Card,CardColumns,CardGroup,CardImg,Row,Col} from 'react-bootstrap'



function Country() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, [countries]);
  return (
  
    <Row xs={1} md={3} className="g-4">

    {countries.map((eleman) => {
      return (
        <Col>
            <Card key={eleman.name} border="success" className="bg-white text-dark" style={{height:"50vh",border:"4px solid"}}>
                <CardImg variant="top" src={eleman.flag}  />
                <Card.Body>
                  <Card.Title>{eleman.name}</Card.Title>
                  <Card.Title className="mb-2 text-muted">
                    {eleman.capital}
                  </Card.Title>
                  <Card.Text>{eleman.languages[0].name}</Card.Text>
                </Card.Body>
                </Card>
                </Col>
          );
        })}
        </Row>
    
  );
}

export default Country;
