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
import { BannerInfo } from './components/BannerInfo';
import { BackInfo } from './components/BackInfo';
import NewsList from './components/GetNews';

export function ServicesPage(){
var elements=new Array(
    {image:'url(img/bg-img/bg-6.jpg)', title:'NUESTROS SERVICIOS', subtitle:['SENET','C O M P A N Y'],button:'Contacto' },
    {image:'url(img/bg-img/bg-9.jpg)', title:'Gaming & E-sports', subtitle:['SERVICIOS', 'S E R V I C I O S'],button:'WhatsApp' }
)
var content='Somos una compañía cuyo origen es la pasión por el mundo de los eSports y el gaming.'
return(
  <>
    <Header activeIndex={2}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <CompanySection title='Compañía especializada en' subtitle='Gaming & E-sports' content={content}></CompanySection>
      <Tendencies></Tendencies>
      <NewsList seccion='servicios'></NewsList>
      <BackInfo></BackInfo>
      <Partners></Partners>
      <BannerInfo></BannerInfo>
      <Contact></Contact>
    <Footer></Footer>
  </>)
}