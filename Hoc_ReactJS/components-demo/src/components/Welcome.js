function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

// muốn dùng thì phải export ra , rồi qua bên file App.js import nó vào
export default Welcome;