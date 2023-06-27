const Footer=()=>{
    const date=new Date();
    return (
    <footer className="footer-area">
        <div className="container">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center mt-3">
               <a target="_blank" href="https://www.facebook.com/SenetCompany?mibextid=LQQJ4d"><i className="fa fa-facebook pl-3" aria-hidden="true"></i></a>
                <a target="_blank" href="https://instagram.com/senet_companymx?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram pl-3" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.linkedin.com/company/senet-company/"><i className="fa fa-linkedin-square pl-3" aria-hidden="true"></i></a>
                <a target="_blank" href="https://twitter.com/CompanySenet"><i className="fa fa-twitter pl-3" aria-hidden="true"></i></a>
                <a target="_blank" href="#"><i className="fa fa-whatsapp pl-3" aria-hidden="true"></i></a>
                <div className="col-12 pt-2 pl-2 text-center">
                    <span><a href="#"> {date.getFullYear()} SENET  |  Ciudad de México  |  Aviso de Privacidad</a> </span><br/>
                </div>
            </div>
        </div>
    </footer>
    );
}
export default Footer;