import React, {Component} from 'react'
import './layout.css'

class Layout extends Component{
    render(){
        return (
            <div>
                <div className="map">
                    <div className="title">Carte des max</div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Layout