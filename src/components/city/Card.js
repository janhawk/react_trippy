import React from 'react';


class Card extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          source: 'http://via.placeholder.com/300x200',
          name: '',
          slug: ''
        };
      }

    render() {
      const {
        name,
        source,
        slug
      } = this.props;
        return(
          <div>
            <h3>
              {name}
            </h3>
            <p>
              <img src = "http://via.placeholder.com/300x200" alt="placeholder" />
              
            </p>
            <p>
              {slug}
            </p>
          </div>
        );
    }
}
export default Card;