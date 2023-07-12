import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import Header from './components/Header.jsx';
import Footer from './components/Footer';
import { SliderCard } from './components/Slider';
import { CompanySection } from './components/CompanySection';
import { Podcast } from './components/Podcast';
import { Contact } from './components/Contact';
import { BannerInfo } from './components/BannerInfo';
import NewsList from './components/GetNews';

export function SenetPage(){
var elements=new Array(
    {image:'url(img/bg-img/bg-10.jpg)', title:'BIENVENIDO A', subtitle:['SENET','S E N E T'],button:'Contacto' },
    {image:'url(img/bg-img/bg-12.jpg)', title:'Gaming & E-sports', subtitle:['SENET','Gaming & E-sports'],button:'WhatsApp' }
)
var content='Somos una compañía con presencia en LATAM especializada en los E-Sports. Creamos SOLUCIONES que hacen que las marcas entren a este mundo de la mejor manera.'
return(
  <>
    <Header activeIndex={1}></Header>
      <SliderCard elementsList={elements}></SliderCard>
      <CompanySection title='Compañía especializada en' subtitle='Gaming & E-sports' content={content}></CompanySection>
      <NewsList seccion='senet'></NewsList>
      <Podcast></Podcast>
      <BannerInfo></BannerInfo>
      <Contact></Contact>
    <Footer></Footer>
  </>)
}