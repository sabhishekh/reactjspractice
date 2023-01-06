
import './App.css';
import Header from './mycomponents/Header';
import logo from './istockphoto.jpg';
import End from './mycomponents/End';
import Cards from './mycomponents/Cards';
console.log(Cards);

function App() {
  return (
    
    


        <>

        
        <h1 className='Headiing-project'>College Information</h1>
        
        
        <Header/>
        
        <div className='cantainer'>
        <h2 className='heading'>Universites,college<br/>
            school education
            <p>A small river named duden follow by their palced and supplier it with the neccassary religiable</p>
            <button>ContactUS</button>
          </h2>
          <img  className="img-cantainer"src={logo} alt="logo" width={400} height={400}/>
 </div>
 <div className='box-cantainer'>
  <div className='box1'> 


  <h3>Certified Teacher</h3>
  <p className='special-points'> 
  Even the all-powerful-pointing has no control about 
  <br/>the blind texts it is an <br/>
  almost alorthogarphic.
  </p>
         
  </div>
  <div className='box2'>
  <h3>Special Education</h3>
  <p className='special-points'> 
  Even the all-powerful-pointing has no control about 
  <br/>the blind texts it is an <br/>
  almost alorthogarphic.
  </p>
  </div>

  <div className='box3'>
  <h3>Book&Library</h3>
  <p className='special-points'> 
  Even the all-powerful-pointing has no control about 
  <br/>the blind texts it is an <br/>
  almost alorthogarphic.
  </p>
  </div>
  <div className='box4'>
  <h3>Sport Clubs</h3>
  <p className='special-points'> 
  Even the all-powerful-pointing has no control about 
  <br/>the blind texts it is an <br/>
  almost alorthogarphic.
  </p>
 
  </div>

</div>

<End/>
<Cards/>
       






 
        


</>
  );
}

export default App;
