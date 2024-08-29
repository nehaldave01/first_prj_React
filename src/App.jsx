import "./App.css";
import Box from './Box';

function App(){
   return(
    <>
    <h1>
      Hello
    </h1>
    <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" 
    style={
      {
        "width" : "1500px",
        "height" : "600px",
        "alignItems" : "center"
      }
    }/>
    <Box />


    </>
   )
}

export default App;