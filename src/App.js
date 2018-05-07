import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Clock from './components/Clock';

const userInfo = {
  name: 'Tom',
  age: 18,
  isActivated: true,
  interests: ['basketball', 'music'],
  address: { province: 'Beijing', city: 'hahaha' }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld 
          name="哈哈哈哈，我是prop.name"
          age={18}
          isActive={true}
          interests={['篮球','足球','音乐']}
          address={{
            province: '湖北',
            city: '异常'
          }}
        />

        <HelloWorld {...userInfo}/>
        <Clock />
      </div>
    )
  }
}

export default App;
