export function Podcast(){
    return(
        <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" 
        style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="featured-artist-thumb">
                        <img src="img/bg-img/podcats.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <div className="featured-artist-content">
                        <div className="section-heading white text-left mb-30">
                            <p>SENET</p>
                            <h2>PODCATS</h2>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="song-play-area">
                            <div className="song-name">
                                <p>M 3</p>
                            </div>
                            <audio preload="auto" controls>
                                <source src="audio/dummy-audio.mp3" />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}