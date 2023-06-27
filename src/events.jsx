import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { SliderCard } from './components/Slider';
import { EventSection } from './components/EventSection';
import { Tendencies } from './components/Tendencies';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { BackInfo } from './components/BackInfo';

export function EventsPage(){
var elements=new Array(
  {image:'url(img/bg-img/bg-21.jpg)', title:'SENET', subtitle:['EVENTOS','E V E N T O S'],button:'Contacto' },
  {image:'url(img/bg-img/bg-24.jpg)', title:'Gaming & E-sports', subtitle:['EVENTOS','E V E N T O'],button:'WhatsApp' }
)
var content='Somos una compañía cuyo origen es la pasión por el mundo de los eSports y el gaming.'
return(
  <>
    <Header activeIndex={4}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <EventSection title='SOCIOS' subtitle='PARTNERS' content={content}></EventSection>
      <Tendencies></Tendencies>
      <BackInfo></BackInfo>
      <Partners></Partners>
      <Contact></Contact>
    <Footer></Footer>
  </>)
}