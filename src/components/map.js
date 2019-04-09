import React, {Component} from 'react'
import L from 'leaflet'
import styled from 'styled-components'

const Wrapper = styled.div`width: ${props => props.width};
height: ${props => props.height}`;

class map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,   
        } 
    }

    componentDidMount() {
        let filtered = [];
        this.state.data.forEach(element => {
            filtered.push(element.user.position.coordinates)
        });
        this.map = L.map('map', {
            center: [58,16],
            zoom: 6,
            zoomControl: true
        }).setView([48.833, 2.333], 13)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 25,
            maxNativeZoom: 25,
        }).addTo(this.map)
        for (var i = 0; i < filtered.length; i++){
            let marker = new L.marker([filtered[i][0],filtered[i][1]]).addTo(this.map);
        }
    }
    render(){
        return(
            <Wrapper width="100%" height="720px" id="map"></Wrapper>
        )
    }
}
export default map