import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'next/image';
import logo from '../../../../public/assets/images/catalogue_01.png';
import Container from 'react-bootstrap/esm/Container';
import {mockSegmentData} from './constant';
import {SegmentItem} from './typeDefs';
import styles from './Segment.module.scss';

const Segment = () => {
  return (
   <>
  <Container>
        <div className="cont">
            <h1>Segments</h1>
          <Row>
            {mockSegmentData.map((item, index) => (
              <Col key={item.id} className={`d-flex flex-column align-items-center justify-content-center py-4 rounded bg-success bg-opacity-10  m-3 ${styles.card}` }>
                <Image className="align-item-center justify-content-center text-center" src={item.image} alt={item.title} width={62} height={80} />
                <h6>{item.title}</h6>
                 
              </Col>
            ))}
          </Row>
        </div>
      </Container>
        {/* <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col>
        <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col>
        <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col>
        <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col>
        <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col>
        <Col>
        <div className="s1">
            <Image src={logo} alt="" width={100} height={100}/>
            <h6></h6>
        </div>
        </Col> */}
    {/* </Row>
   </div>
   </Container> */}
   </>
  )
}

export default Segment