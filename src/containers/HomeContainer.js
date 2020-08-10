import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';
//import Config from '../Config';

class HomeContainer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cities: []
    };
}

// componentDidMount() {
//     const url = 'http://localhost:3001/api/home';
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log('data',data);
//       // code
//       const cities = data.results;
//       console.log(cities);
//       this.setState({
//           cities: data.results
//       })
//     });
//     Api.getHome()
//     .then((cities) => {
        
//         this.setState({
//             cities
//         })
        
//     });
// }
       


  render() {
console.log(Api.getHome())
    return (
        <div>
      <Home  
      />
      {this.state.cities}
      </div>
    );
  }
}

export default HomeContainer;