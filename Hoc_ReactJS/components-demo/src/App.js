
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Welcome />
      <Welcome name = 'Truong'/>
      <Welcome name = 'Dùng name để dặt tên thuộc tính'/>
    </div>
  );
}

export default App;
