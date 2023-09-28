/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { useState } from 'react';

import style from './App.module.css';
import { AppContainer } from './style';
import Image from "./assets/images.jpeg";
// import UserForm from './UserForm';
// import Greeting from './Greeting';
// import Content from './Content';
// import Footer from './component/Footer';
// import Header from './component/Header';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { userName: '' };
//   }

//   handleFormSubmit = (userName) => {
//     this.setState({ userName });
//   }

//   render() {
//     return (
//       <div className="App">
//         <UserForm onSubmit={this.handleFormSubmit} />
//         <Greeting userName={this.state.userName} />
//       </div>
//     );
//   }
// }


// const Component = (props) => {
//   return(
//     <div>
//       <div>Đây là tuổi : {props.age}</div>
//       <div>đây là tên: {props.displayName}</div>
//     </div>
//   );
// };
function App() {

  // eslint-disable-next-line no-unused-vars

  const[text, setText] = useState(""); //text : state , setText set lại giá trị cho state
console.log(style);

  const handleOnchange = (event) =>{
  const value = event.target.value;
  setText(value);
};

  return(
    <AppContainer>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      
      <input type='text' onChange={handleOnchange}/>
      <p style={{color : "red"}}>{text}</p>
      <img src={Image} alt=""/>
    </AppContainer>
  );
  // // constructor(props) {
  // //   super(props);
  // //   this.state = { userName: '' };
  // // };


  // handleFormSubmit = (userName) => {
  //   this.setState({ userName });
  // };
  // const [age, setAge] = useState(0);
  // const [name, setName] = useState('Chun');
  // const [input, setInput] = useState("");
  // const handleInput = (e) =>{
  //   setInput(e.target.value);
//   }

//   const onIncreaseAge = () => {
//     setAge(age + 1);
//     setName();
//   };

//   return(
//     <div>
//        <Header/>
//        <Content/>
//        <div className='App'>
//         <div>{age}</div>
//         <input type='text' name='user' onChange={handleInput}></input>
//         <button onClick={onIncreaseAge}>Tăng age lên </button>
//         <Component age={age} displayName={name}/> 
//        </div>
//        <Footer/>
//     </div>
//   );
}

export default App;
