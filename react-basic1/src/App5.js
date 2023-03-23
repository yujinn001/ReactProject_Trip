import {Component,Fragment} from "react";
import axios from "axios";
class  App5 extends  Component{
    constructor(props) {
        super(props);
        this.state={
            food_list:[]

        }
    }

    componentDidMount() {
        axios.get("http://localhost/food/location_react",{

        }).then(response=>{
            console.log(response.data)
            this.setState({food_list:response.data})
        })
    }

    render() {
        const html=this.state.food_list.map(location=>
            <div className="col-md-3">
                <div className="thumbnail">
                    <img src={location.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{location.name}</p>
                    </div>
                </div>
            </div>
        )
        return (
            <Fragment>
                <div className={"row"}>
                    <h1>food_location</h1>
                    {html}
                </div>
            </Fragment>
        )
    }
}

export default  App5;