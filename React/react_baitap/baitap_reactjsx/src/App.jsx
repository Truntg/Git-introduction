/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css'
import Content from './Content';
import Footer from './component/Footer';
import Header from './component/Header';

const Component = (props) => {
  return(
    <div>
      <div>Đây là tuổi : {props.age}</div>
      <div>đây là tên: {props.displayName}</div>
    </div>
  );
};
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Chun');

  const onIncreaseAge = () => {
    setAge(age + 1);
    setName();
  };

  return(
    <div>
       <Header/>
       <Content/>
       <div className='container'>
        <div>{age}</div>
        <button onClick={onIncreaseAge}>Tăng age lên </button>
        <Component age={age} displayName={name}/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
