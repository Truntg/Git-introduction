
import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';


function App() {
  // let i = 1;

  // const e1 = <h1>hello world</h1>;
  // const e2 = <h1>flase</h1>;

  // return i === 1 ? e1 : e2;
  //const isLogin = true;

  const [isLogin, setIsLogin] = useState(false);

  const onLoginClick = () => {
    console.log("onLoginClick");
    setIsLogin(true);
  };

  const onLogoutClick = () =>{
    console.log("onLogoutClick");
    setIsLogin(false);
  };


  return (
    <div>
      <Header isLogined={isLogin} onLogin ={onLoginClick} onLogout={onLogoutClick}/>
      <Content/>
    </div>
  );
}

export default App
//tên thẻ / thuộc tính/ text