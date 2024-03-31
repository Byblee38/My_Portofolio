import '../../../src/component/CarShoowroom/App.css'
import Mobil from "./Filter.jsx";
import logo from '../../../public/CarShowroom/Logo-Productzilla.png'

function App() {

  return (
    <>
    <div className="body">
      <div className="container">
        <div className="header">
          <img style={{width: '150px', height: '150px'}} src={logo} alt="logo" />
          <h1 className="header-text">Zilla Showroom</h1>
        </div>
        <div className="content">
          <div className="search">
            <h1 className="search-title">
              Cari Mobil Impian Anda
            </h1>
            <div className="border">
              <input className="search-input" type="text" placeholder="Cari mobil..." />
              <img src="../../../public/CarShowroom/search.png" alt="search" style={{marginRight: '24px'}} />
            </div>
          </div>
          <Mobil/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
