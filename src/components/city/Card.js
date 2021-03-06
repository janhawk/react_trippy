import React from 'react';
import placeholder from '../../placeholder.png';
import Api from '../../utils/Api';
// import City from '../city';

class Card extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          source: 'http://via.placeholder.com/300x200',
          name: '',
          slug: ''
        };
      }
    componentDidMount() {
      Api.getHome()
      .then(cities => {
        console.log(cities);
          this.setState({
              cities
          })
          
      });
  }
    
    render() {
      
      const {
        name,
        source,
        slug
      } = this.props;
        return(
          <div>
            
            <h1>{name}</h1>
            <img src={source}/>
            <h3>{slug}</h3>
            
            
          </div> 
        );
    }
}
Card.defaultProps = {
  source : placeholder
};
export default Card;