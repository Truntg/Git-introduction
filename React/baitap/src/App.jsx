/* eslint-disable no-undef */
import './App.css';
// eslint-disable-next-line no-unused-vars
import styled from './App.module.css';

function App() {
  // return (
  //   <>
  //   <div className={styled.container}>
  //     <div className={styled.sidebar}>left</div>
  //     <div className={styled.content}>right</div>
  //   </div>
  //   </>
  // )
  const [time, setTime] = useState('day'); // Bước 2: Khai báo state time

  const handleTimeChange = (newTime) => {
    setTime(newTime); // Bước 3: Khai báo hàm onClick với mỗi button
  };

  return (
    <div className="App">
      <button onClick={() => handleTimeChange('night')}>Night</button>
      <button onClick={() => handleTimeChange('day')}>Day</button>

      {/* Bước 4: Tạo div có chiều dài và chiều rộng */}
      <div
        style={{
          width: '80px',
          height: '200px',
          backgroundColor: time === 'day' ? 'blue' : 'black',
        }}
      ></div>
    </div>
  );
}

export default App
