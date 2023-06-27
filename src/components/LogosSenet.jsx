export function LogosSenet({iconName}){
    const handleHover=(e)=>{
        var img=e.target.getAttribute('src')
        //var img=$(this).attr("src");
		//$(this).attr("src",img.replace("01","03"));
        e.target.setAttribute('src',img.replace("01","03"))
    }
    const handleMouseOut=(e)=>{
        var img=e.target.getAttribute('src')
		e.target.setAttribute('src',img.replace("03","01"))
    }
    return(
        <div className="single-album">
            <img className="icons" onMouseLeave={handleMouseOut} onMouseEnter={handleHover} src={iconName} alt="" />
            <div className="album-info">
                <a href="#"><h5>SERVICIOS</h5></a>
            </div>
        </div>
    )
}