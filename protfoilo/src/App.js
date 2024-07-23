import './App.css';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{display:'flex'}}>
      <div style={{height:'90px',width:'100px',backgroundColor:'white'}}>
        <h1></h1>
      </div>
      <div style={{height:'80px',width:'80px',backgroundColor:'white'}}>
        <h1>Home</h1>
      </div>
      </div>
      <div style={{height:'500px',width:'100vw',backgroundColor:'black'}}>
        <h1>Home</h1>
      </div>
      <div style={{display:'flex'}}>
      <div style={{height:'90px',width:'100px',backgroundColor:'black'}}>
        <h1></h1>
      </div>
      <div style={{height:'80px',width:'200px',backgroundColor:'white'}}>
        <h1>Home</h1>
      </div>
      </div>
      <div style={{height:'900px',width:'100vw',backgroundColor:'white'}}>
      </div>
      <div style={{height:'500px',width:'100vw',backgroundColor:'black'}}>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default App;
