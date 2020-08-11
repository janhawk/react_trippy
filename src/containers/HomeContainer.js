import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';
import Card from '../components/city/Card'
// import Config from '../Config';

class HomeContainer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cities: []
    };
}
componentDidMount() {
//     const url = 'http://localhost:3001/api/home';
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log('data',data);
//       // code
//       const cities = data.cities;
//       console.log(cities);
//       this.setState({
//           cities
//       })
//     });
    Api.getHome()
    .then(cities => {
      console.log(cities);
        this.setState({
            cities
        })
        
    });
}
  render() {
    return (      
      <div>
        <Card />
        <Home />
        Test
        {this.state.cities.map((city) => {
          console.log("city", city)
          return (
            <div>
              <img src ={'http://localhost:3001' + city .source}/>
              <p>
                {city.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeContainer;