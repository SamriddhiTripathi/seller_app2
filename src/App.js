import './App.css';
import myImage from './chinese-city.jpg';
import myImage1 from './big-buildings.jpg';
import myImage2 from './modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg';
import myImage3 from './new-buildings-with-green-areas.jpg';
import myImage4 from './myImages.js';
import heart from './heart.png';

function App() {
  return (
    <>
    <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet"/>
    <script src={myImage4}></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body style={{backgroundColor:"lightblue"}}>
      <div>
      <h2 style={{textAlign:"center"}}>Featured Listed Property</h2>
      <p style={{textAlign:"center"}}>
        Real Estate can be bought, sold, rent, leased and can be a valuable investment opportunity.
      </p>
      </div>
      <header style={{backgroundColor:"transparent", border:0}}>
    <div class="container-fluid">
      <div class="row py-3 border-bottom">
        <div className='col-md-1'>
        <button style={{width:100, backgroundColor:"transparent", borderColor:"white"}}>New York</button>
        </div>
        <div className='col-md-1'>
        <button style={{width:100, backgroundColor:"transparent", borderColor:"white"}}>Mumbai</button>
        </div>
        <div className='col-md-1'>
        <button style={{width:100, backgroundColor:"transparent", borderColor:"white"}}>Paris</button>
        </div>
        <div className='col-md-1'>
        <button style={{width:100, backgroundColor:"transparent", borderColor:"white"}}>London</button>
        </div>
        <div class="col">
            <div class="d-flex align-items-center" style={{float:'right', border:1, borderColor:"white"}}>
                <a href="sd.js" class="btn-link text-decoration-none">View All→</a>
            </div>
         </div>
      </div>
    </div>
      </header>
      <section className='featured' id='featured' style={{border:0}}>
    <div class="row py-3 border-bottom"> 
      <div className='col-md-4 d-none d-md-block'>
        <div className='box' style={{border:1, borderColor:"white"}}>
        <div class="w3-content w3-section container" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
          <button class="top-left">For Rent</button>
          <div class="top-right">
          <a href="sd.js" class="rounded-circle bg-light p-2 mx-1">
            <img src={heart} style="height:24px; width:24px"></img>
          </a>
          </div>
        </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/- per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read More..</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
        <div class="w3-content w3-section" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
        </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/- per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read more..</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
        <div class="w3-content w3-section" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
        </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/-per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read more..</a>
        </div>
      </div>
      </div>
      <div class="row py-3 border-bottom"> 
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
        <div class="w3-content w3-section" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
      </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/-per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read more..</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
        <div class="w3-content w3-section" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
        </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/-per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read more..</a>
        </div>
      </div>
      <div className='col-md-4 d-none d-md-block'>
        <div className='box'>
        <div class="w3-content w3-section" style={{width:400, height:200}}>
          <img class="mySlides w3-animate-top" src={myImage} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage1} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-top" src={myImage2} style={{width:400, height:200}}/>
          <img class="mySlides w3-animate-bottom" src={myImage3} style={{width:400, height:200}}/>
        </div>
          <h3>Address</h3>
          <div className='star'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          </div>
          <div className='price'>5,000/-per month</div>
          <a href="hp.js" className='btn' style={{backgroundColor:'blue', width:"50", float:"right"}}>Read More..</a>
        </div>
      </div>
      </div>
    </section>
    </body>
    </>
  );
}

export default App;
