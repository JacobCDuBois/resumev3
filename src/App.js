import 'bootstrap'
import './App.css';
import Bio from "./Bio";
import Experience from "./Experience";
function App() {
  return (
    <div className="App ">
      <header className="App-header">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/css/bootstrap.min.css"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.5.0/dist/js/bootstrap.min.js"></script>



      </header>
        <div className={"background_color_div"}>
        <body className="background">
        <div>
            <img className="right_bg_img" src="/test6.png"></img>
        </div>
        <div className="container d-flex" >
            <div className="d-flex row justify-content-evenly w-100 ">
                <Bio>

                </Bio>

                <Experience>


                </Experience>
            </div>




        </div>



        </body>
        </div>


    </div>
  );
}

export default App;
