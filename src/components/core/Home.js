import React from 'react';
import Card from '../city/Card';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            slug: '',
            source: ''
        }
    }
    render() {
        // if (this.props.cities.length > 0) {
        //         return(<div>loading...</div>);
        // }
            return (
                <div></div>
                    // <Card 
                    //     name = {this.props.cities[0].name}
                    //     slug = {this.props.cities[0].slug}
                    //     source = {this.props.cities[0].source}
                    // />
                
            );
        }


}
export default Home;