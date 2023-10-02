
import './App.css'
// import Header from './components/Header';
// import Content from './components/Content';
import { useEffect, useState } from 'react';


function App() {


  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time.toLocaleString()}</p>
    </div>
  );
  // const [number1, setNumber1] = useState(0);
  // const [number2, setNumber2] = useState(0);
  // const [sum, setSum] = useState(0);
  // const [multiply, setMultiply] = useState(0);

  // const handleAdd = () => {
  //   setSum(parseFloat(number1) + parseFloat(number2));
  // };

  // const handleMultiply = () => {
  //   const result = number1 * number2;
  //   setMultiply(result);
  // };


  // return (
  //   <div>
  //     <h2>Calculator</h2>
  //     <div>
  //       <input
  //         type="number"
  //         value={number1}
  //         onChange={(e) => setNumber1(parseInt(e.target.value))}
  //       />
  //       <input
  //         type="number"
  //         value={number2}
  //         onChange={(e) => setNumber2(parseInt(e.target.value))}
  //       />
  //     </div>
  //     <div>
  //       <button onClick={handleAdd}>Add</button>
  //       <button onClick={handleMultiply}>Multiply</button>
  //     </div>
  //     <div>
  //       <p>Sum: {sum}</p>
  //       <p>Multiply: {multiply}</p>
  //     </div>
  //   </div>
  // );
  // let i = 1;

  // const e1 = <h1>hello world</h1>;
  // const e2 = <h1>flase</h1>;

  // return i === 1 ? e1 : e2;
  //const isLogin = true;

  // const [isLogin, setIsLogin] = useState(false);

  // const onLoginClick = () => {
  //   console.log("onLoginClick");
  //   setIsLogin(true);
  // };

  // const onLogoutClick = () =>{
  //   console.log("onLogoutClick");
  //   setIsLogin(false);
  // };

  // eslint-disable-next-line no-unused-vars
  // const GetName = () => {
    //  const[name, setName] = useState(" ")

    // return(
    //     <div>
    //         <input value={name} onChange={e=>setName(e.target.value)} type="text"/>
    //     </div>
    // )
// };


  // return (
  //   <div>
  //     <Header isLogined={isLogin}//đây là câu lệnh về props
  //      onLogin ={onLoginClick} onLogout={onLogoutClick}/>
  //     <Content/>
  //   </div>
  // );
}

export default App
//tên thẻ / thuộc tính/ text