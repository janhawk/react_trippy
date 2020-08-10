import React from 'react';
import Card from '../city/Card';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            slug: '',
            source: 'http://via.placeholder.com/300x200'
        }
    }
    render() {
        // if (this.props.cities.length > 0) {
        //     return (
                
        //             <Card 
        //                 name = {this.props.cities[0].name}
        //                 slug = {this.props.cities[0].slug}
        //                 source = {this.props.cities[0].source}
        //             />
                
        //     )
        // }
        return(
            <Card
            // name = {this.props.cities[0].name}
            //             slug = {this.props.cities[0].slug}
            //             source = {this.props.cities[0].source}
            />
        );
    }
}
export default Home;