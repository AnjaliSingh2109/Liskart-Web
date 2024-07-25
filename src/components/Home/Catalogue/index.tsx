import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'next/image';
import Col from 'react-bootstrap/esm/Col';
import {mockCatalogueData} from './constant'

const Catalogue = () => {
  return (
   <>
   <Container>
    <h1 className="m-2">Our Catalogue</h1>
    <Row>
       {/* {mockCatalogueData.map((item,index)=>(
             
             <Col key={item.id}>
             <Image src={item.image} alt={item.title} width={150} height={100}/>
             <h6>{item.title}</h6>
             </Col>
       )) } */}
          {mockCatalogueData.map((item,index)=>(
         <Col key={item.id} className="text-center">
           <Image className="rounded" src={item.image} alt={item.title} width={280} height={250} />
           <h6 className="mt-3">{item.title}</h6>
         </Col>
       ))}
    </Row>
   </Container>
   </>
  )
}

export default Catalogue;