import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const handleTranslate=()=>{
    var slideLayer = $("[data-animation]");
    slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
    });
}
const handleTranslated=()=>{
    var slideLayer = $("[data-animation]");
    slideLayer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
    });
}
$("[data-delay]").each(function () {
    var anim_del = $(this).data('delay');
    $(this).css('animation-delay', anim_del);
});

$("[data-duration]").each(function () {
    var anim_dur = $(this).data('duration');
    $(this).css('animation-duration', anim_dur);
});

export function SliderCard({elementsList}){
    return(
        <section className="hero-area">
        <OwlCarousel onTranslate={handleTranslate} onTranslated={handleTranslated}
          items={1}
          className="owl-theme"
          loop
          dots={false}
          autoplay
          autoplayTimeout={7000}
          smartSpeed={10000}
          animateIn={'fadeIn'}
          animateOut={'fadeOut'}
          margin={0} >
          <div className="single-hero-slide d-flex align-items-center justify-content-center">
                <div className="slide-img bg-img" style={{backgroundImage: elementsList[0].image}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h6 data-animation="fadeInUp" data-delay="100ms">{elementsList[0].title}</h6>
                                <h2 data-animation="fadeInUp" data-delay="300ms">{elementsList[0].subtitle[0]}<span>{elementsList[0].subtitle[1]}</span></h2>
                                <a data-animation="fadeInUp" data-delay="500ms" href="contact.html" className="btn oneMusic-btn mt-50">{elementsList[0].button}<i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-hero-slide d-flex align-items-center justify-content-center">
                <div className="slide-img bg-img" style={{backgroundImage: elementsList[1].image}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h6 data-animation="fadeInUp" data-delay="100ms">{elementsList[1].title}</h6>
                                <h2 data-animation="fadeInUp" data-delay="300ms">{elementsList[1].subtitle[0]}<span>{elementsList[1].subtitle[1]}</span></h2>
                                <a data-animation="fadeInUp" data-delay="500ms" href="#" className="btn oneMusic-btn mt-50">{elementsList[1].button}<i className="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </OwlCarousel>
    </section>
    );
}