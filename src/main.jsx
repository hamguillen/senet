import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SmoothScroll from './components/SmoothScroll';
import { MyApp } from '.';
import { PartnersPage } from './partners';
import { SenetPage } from './senet';
import { ServicesPage } from './services';
import { EventsPage } from './events';
import { ContactPage } from './contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MyApp></MyApp>,
  },
  {
    path:'/senet',
    element: <SenetPage></SenetPage>
  },
  {
    path:'/services',
    element: <ServicesPage></ServicesPage>
  },
  {
    path:"/partners",
    element:<PartnersPage></PartnersPage>
  },
  {
    path:'/events',
    element: <EventsPage></EventsPage>
  },
  {
    path:'/contact',
    element:<ContactPage></ContactPage>
  }
]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
  /*<router>
      <SmoothScroll>
        <router>
          <router path="/" element={<MyApp />} />
          <router path="/contact" element={<ContactPage />} />
        </router>
      </SmoothScroll>
    </router>*/
  )
