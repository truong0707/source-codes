import logo from './logo.svg';
import './App.css';

// in lists
const numbers = [1, 2, 3, 4, 5];
function App() {
  // number => là arrow function , hàm map() dùng để duyệt qua mỗi phần tử của mảng và trả về ( number * 2 )
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
  return (
    <div>
    </div>
  );
}




/* const numbers = ["truong", "vũ", "sơn", "tuấn", 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
 
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
 */
export default App;
