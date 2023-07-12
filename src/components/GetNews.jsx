import React, {Component} from 'react';

class NewsList extends Component{
    constructor()
    {
        super();
        this.state={
            list:null,
        }
        
    }
    componentDidMount(){
        console.log(this.props.seccion)
        fetch("http://localhost/senetadmin/public/api/noticias/"+this.props.seccion).then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                this.setState({list:result})
            })
        })
    }
    render(){
        return(
            <section className="latest-albums-area section-padding-100">
                <div className="container">
                {
                    this.state.list?
                    <div>
                        {
                            this.state.list.map((item)=>
                            <div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading style-2">
                                        <h2>{item.titulo}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <div className="albums-text text-center mb-70" dangerouslySetInnerHTML={ { __html: item.contenido } }>
                                    </div>
                                </div>
                            </div>
                            </div>
                            )
                        }
                    </div>
                    :<p>...</p>
                }
                </div>
            </section>
        )
    }
}
export default NewsList;