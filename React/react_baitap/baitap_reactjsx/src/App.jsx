/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// import { useState } from 'react';
import './App.css'
// import Content from './Content';
// import Footer from './component/Footer';
// import Header from './component/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  handleFormSubmit = (userName) => {
    this.setState({ userName });
  }

  render() {
    return (
      <div className="App">
        <UserForm onSubmit={this.handleFormSubmit} />
        <Greeting userName={this.state.userName} />
      </div>
    );
  }
}



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userName: '' };
//   }

//   handleFormSubmit = (userName) => {
//     this.setState({ userName });
//   };
// }

// const Component = (props) => {
//   return(
//     <div>
//       <div>Đây là tuổi : {props.age}</div>
//       <div>đây là tên: {props.displayName}</div>
//     </div>
//   );
// };
// function App() {
//   constructor(props) {
//     super(props);
//     this.state = { userName: '' };
//   }

//   handleFormSubmit = (userName) => {
//     this.setState({ userName });
//   };
//   const [age, setAge] = useState(0);
//   const [name, setName] = useState('Chun');
//   const [input, setInput] = useState("");
//   const handleInput = (e) =>{
//     setInput(e.target.value);
//   }

//   const onIncreaseAge = () => {
//     setAge(age + 1);
//     setName();
//   };
// Redirect()
//   return(
//     <div>
//        <Header/>
//        <Content/>
//        <div className='App'>
//         {/* <div>{age}</div>
//         <input type='text' name='user' onChange={handleInput}></input>
//         <button onClick={onIncreaseAge}>Tăng age lên </button>
//         <Component age={age} displayName={name}/> */}
//         <UserForm onSubmit={this.handleFormSubmit} />
//         <Greeting userName={this.state.userName} />
//        </div>
//        <Footer/>
//     </div>
//   );
// }

export default App;
