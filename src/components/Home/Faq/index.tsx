'use client'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import {mockFaqData} from './constant';
import {Faqs} from './typeDefs';

const Faq = () => {
  return (
    <>
   <Container>
     <h1>FAQS</h1>
     {mockFaqData?.map((item) => (
         <Accordion defaultActiveKey="0" key={item.id} className='border-left-0 border-right-0'>
         <Accordion.Item eventKey="0">
           <Accordion.Header className="p-3"><h3><b>{item.title}</b></h3></Accordion.Header>
           <Accordion.Body className="p-3">
            <b> {item.desc}</b>
           </Accordion.Body>
         </Accordion.Item>
       </Accordion>
     )) }
   </Container>
    </>
  )
}

export default Faq;