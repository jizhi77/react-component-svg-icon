import SvgIcon from "./components/SvgIcon";

function App() {
  return (
    <div className="App">
      <SvgIcon name='airbnb' style={{fontSize: 100}} color='red'/>
      <SvgIcon name='500px' style={{fontSize: 10}} color='green'/>
      <SvgIcon name='logo'/>
    </div>
  );
}

export default App;
