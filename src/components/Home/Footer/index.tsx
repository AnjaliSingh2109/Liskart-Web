import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import {mockFooterData} from './constant';
import {Footers} from './typeDefs'

const Footer = () => {
  return (
    <>
    <div className='bg-dark'>
    <Container>
       <Row>
        {mockFooterData?.map((item) => (
            <Col key={item.id}>
            <h4 className='text-light m-3'>{item.title}</h4>
            <p className='text-light m-3'><b>{item.desc}</b></p>
            </Col>
        ))

        }
       </Row>
    </Container>
    </div>
    </>
  )
}

export default Footer;