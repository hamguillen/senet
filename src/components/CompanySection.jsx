import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { LogosSenet } from "./LogosSenet";

export function CompanySection({title,subtitle,content}){
    return(
        <section className="latest-albums-area section-padding-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading style-2">
                        <p>{title}</p>
                        <h2>{subtitle}</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-9">
                    <div className="albums-text text-center mb-70">
                        <p>{content}</p>
                    </div>
                </div>
            </div>

           <div className="row">
                <div className="col-12">
                    <OwlCarousel className="owl-carousel"
                        items={5}
                        margin={30}
                        loop
                        dots={false}
                        autoplay
                        autoplayTimeout={5000}
                        smartSpeed={750}
                        responsive={ {
                            0: {
                                items: 3
                            },
                            480: {
                                items: 3
                            },
                            768: {
                                items: 3
                            },
                            992: {
                                items: 4
                            },
                            1200: {
                                items: 5
                            }
                        }}
                        >
                        <LogosSenet iconName="img/icons_senet/icon_servicios_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_partners_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_talento_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_casosExito_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_marcas_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_agencias_01.png"></LogosSenet>
                        <LogosSenet iconName="img/icons_senet/icon_equipos_01.png"></LogosSenet>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
    )
}