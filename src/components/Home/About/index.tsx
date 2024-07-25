import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'next/image';
import about from '../../../../public/assets/images/about.png'
import { ReactSVG } from 'react-svg';
import {mockAboutData} from './constant';
import {Abouts} from './typeDefs';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
    <Container className={`${styles.card}`}>
        <Row >
            <Col >
            <h1 className='my-4'>About Lucas Indian Service Limited</h1>
            <Image src={about} alt="Lucas Inia Services Limited" width={680} height={350} className="rounded my-3"/>
            <p className='my-4 fs-5'>Lucas Indian Service commenced operations in 1930 in Mumbai, under Joseph Lucas, Birmingham, UK serving the automotive aftermarket with a focus on auto electrical, diesel injection and brakes. After expanding to Kolkata, the Chennai operations were started in 1946. LIS became a fully owned subsidiary of Lucas TVS on 1 August 1968.</p>
            </Col>
            <Col>
            <h1 className='my-4'>Why Choose LISKart</h1>
           {mockAboutData?.map((item) =>(
                <div key={item.id} className='d-flex flex-row my-7'>
                     <Image src={item.image} alt={item.title} width={60} height={60} className='text-success'/>
                    <div className="d-flex flex-column px-6">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    </div>
                </div>
           ))}
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default About