// 'use client'
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {mockPopularData} from './constant';
// import {Products} from './typeDefs'
// import Container from 'react-bootstrap/esm/Container';

// const PopularProducts = () => {
//   return (
//    <>
//    <Container>
//     <h1>Popular Products</h1>
//      {mockPopularData.map((item,index)=>(
//       <Card style={{ width: '18rem' }} key={item.id}>
//        <Card.Img variant="top" src={item.image} />
//        <Card.Body>
//          <Card.Title>{item.title}</Card.Title>
//          <Card.Text>
//            {item.desc}
//          </Card.Text>
//          <Button variant="primary">ADD TO CART</Button>
//        </Card.Body>
//        </Card>
//      ))

//      }
//      </Container>
//     </>
//   )
// }

// export default PopularProducts;


'use client';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'; // Import Container from correct location
import { mockPopularData } from './constant'; // Import mockPopularData
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import styles from './PopularProducts.module.scss'
//import {Products} from './typeDefs' - You had a syntax error here

const PopularProducts = () => {

  

  return (
    <>
      <Container>
        <h1 className="m-3">Popular Products</h1>
        <Row>
        {mockPopularData?.map((item) => (
          <Col >
          <Card key={item.id} className={`${styles.col}`}>
            <Card.Img variant="top" src={item.image} className={`text-align-center mx-7 ${styles.img}`}/>
            <Card.Body>
              <Card.Title><b>{item.title}</b></Card.Title>
              <Card.Text><b>{item.desc}</b></Card.Text>
             <div className='d-flex flex-row mt-7'>
             <h3 className={`${styles.priceCont}`} ><b>{item.price}</b></h3>
             <Button variant="outline-success" className={`${styles.buttonStyle}`}>ADD TO CART</Button>
             </div>
            </Card.Body>
          </Card>
          </Col>
        ))}
        </Row>
      </Container>
    </>
  );
};

export default PopularProducts;
