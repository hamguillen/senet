import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { SliderCard } from './components/Slider';
import { CompanySection } from './components/CompanySection';
import { Tendencies } from './components/Tendencies';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { BackInfo } from './components/BackInfo';

export function PartnersPage(){
var elements=new Array(
  {image:'url(img/bg-img/bg-19.jpg)', title:'SENET', subtitle:['PARTNERS','PARTNERS'],button:'Contacto' },
  {image:'url(img/bg-img/bg-18.jpg)', title:'Gaming & E-sports', subtitle:['PARTNERS','PARTNERS'],button:'WhatsApp' }
)
var content='Somos una compañía cuyo origen es la pasión por el mundo de los eSports y el gaming.'
return(
  <>
    <Header activeIndex={3}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <CompanySection title='SOCIOS' subtitle='PARTNERS' content={content}></CompanySection>
      <Tendencies></Tendencies>
      <NewsList seccion='partners'></NewsList>
      <BackInfo></BackInfo>
      <Partners></Partners>
      <Contact></Contact>
    <Footer></Footer>
  </>)
}