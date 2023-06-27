import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header=({activeIndex})=>{

  useEffect(() => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional if you want to skip the scrolling animation
      });
    const handleMobile=(event)=>{
        var navToggler=$('.navbarToggler');
        var classyMenu = $('.classy-menu');
        if(window.screen.width<1280)
        {
            document.getElementsByClassName('classy-nav-container')[0].classList.remove('breakpoint-off')
            document.getElementsByClassName('classy-nav-container')[0].classList.add('breakpoint-on')
        }
        $('.classy-navbar-toggler')[0].addEventListener('click', function () {
            navToggler.toggleClass('active');
            classyMenu.toggleClass('menu-on');
        });
    }
    const handleScroll = (event) => {
        if(window.scrollY>0)
            document.getElementsByClassName('oneMusic-main-menu')[0].classList.add('is-sticky2')
        else
            document.getElementsByClassName('oneMusic-main-menu')[0].classList.remove('is-sticky2')
    };
    handleMobile()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  var menuNav=new Array(
    {href:'/',text:'HOME'},
    {href:'/senet',text:'SENET'},
    {href:'/services',text:'SERVICIOS'},
    {href:'/partners',text:'PARTNERS'},
    {href:'/events',text:'EVENTOS'},
    {href:'/contact',text:'CONTACTO'}
    )
    return(
        <header className="header-area">
        <div className="oneMusic-main-menu">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">
                    <nav className="classy-navbar justify-content-between" id="oneMusicNav">
                        <a href="/" className="nav-brand"><img src="img/core-img/logo.png" alt="" /></a>
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>
                        <div className="classy-menu">
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
                            <div className="classynav">
                                <ul>
                                    {
                                        menuNav.map(function(value, index){
                                            var active=(activeIndex==index?'active':'')
                                            return (<li key={value.href}><Link to={value.href} className={active}>{value.text}</Link></li>)
                                        })
                                    }
                                </ul>
                                <div className="login-register-cart-button d-flex align-items-center">
                                    <div className="login-register-btn mr-50">
                                        <a href="#" id="loginBtn">LOGIN | REGISTRO</a>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
}
export default Header;