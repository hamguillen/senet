import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { SliderCard } from './components/Slider';
import { EventSection } from './components/EventSection';
import { Contact } from './components/Contact';

export function ContactPage(){
var elements=new Array(
  {image:'url(img/bg-img/bg-14.jpg)', title:'ATENCION PERSONALIZADA', subtitle:['CONTACTO','PROYECTOS PERSONALIZADOS'],button:'Contacto' },
  {image:'url(img/bg-img/bg-13.jpg)', title:'Estrategias a medida', subtitle:['Proyectos Personalizados','ESTRATEGIAS'],button:'WhatsApp' }
)
var content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
return(
  <>
    <Header activeIndex={5}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <EventSection title='Compañía especializada en' subtitle='Gaming & E-sports' content={content}></EventSection>
      <Contact></Contact>
    <Footer></Footer>
  </>)
}