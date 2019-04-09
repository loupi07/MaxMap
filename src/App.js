import React, {Component} from 'react'
import Layout from  './layout/layout'
import Map from './components/map'
import Axios from 'axios';

class App extends Component {
    state=({
        position:[]
    })

    componentDidMount() {
        Axios.get('https://api-dev.mercimax.com/users/max/nearby/48.8601478,2.3249167')
        .then(response => {
            this.setState({
                position: response.data
            })
        })
    }
    render(){
        return (
            <Layout>
                {this.state.position.length > 0 ?
                <Map data={this.state.position}></Map>
               : null }
            </Layout>
        )
    }
}

export default App;