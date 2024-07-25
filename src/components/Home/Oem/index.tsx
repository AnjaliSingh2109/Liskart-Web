
import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'next/image';
import {mockOemData} from './constant';
import {Oems} from './typeDefs';
import styles from 'Oem.module.scss';

const Oem = () => {
  return (
   <>
   <div className="mt-4 bg-primary bg-opacity-10" >
   <Container >
    <Row>
        {/* {mockOemData.map((index,item)=>(
            <Col key={item.id} className="text-center">
            <Image src={item.image} alt={item.title} width={150} height={100}/>
            </Col>
        ))

        } */}
        <h1 className="mt-3">OEM</h1>
          {mockOemData.map((item) => (
          <Col key={item.id} className='d-flex rounded bg-white my-6 p-3 justify-content-center mx-2'>
            <Image src={item.image} alt={item.title} width={90} height={90} />
          </Col>
        ))}
    </Row>
   </Container>
   </div>
   </>
  )
}

export default Oem;