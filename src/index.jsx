import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { SliderCard } from './components/Slider';
import { CompanySection } from './components/CompanySection';
import { Tendencies } from './components/Tendencies';
import { Podcast } from './components/Podcast';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';

export function MyApp(){
var elements=new Array(
  {image:'url(img/bg-img/bg-1.jpg)', title:'BIENVENIDO A', subtitle:['SENET','COMPANY'],button:'Contacto' },
  {image:'url(img/bg-img/bg-2.jpg)', title:'Gaming & E-sports', subtitle:['SENET','Gaming & E-sports'],button:'WhatsApp' }
)
var content='Somos una compañía con presencia en LATAM especializada en los E-Sports. Creamos SOLUCIONES que hacen que las marcas entren a este mundo de la mejor manera.'
return(
  <>
    <Header activeIndex={0}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <CompanySection title='Compañía especializada en' subtitle='Gaming & E-sports' content={content}></CompanySection>
      <Tendencies></Tendencies>
      <Podcast></Podcast>
      <Partners></Partners>
      <Contact></Contact>
    <Footer></Footer>
    {/*AddLibrary('js/jquery/jquery-2.2.4.min.js')*/}
  </>
)
}