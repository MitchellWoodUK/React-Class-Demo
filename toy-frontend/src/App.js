
import './App.css';

//import components
import Header from './Components/Header'
import Footer from './Components/Footer'
//import screens
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import AboutScreen from './Screens/AboutScreen'
import ContactScreen from './Screens/ContactScreen'
import LocationsScreen from './Screens/LocationsScreen';
import AddProductScreen from './Screens/AddProductScreen';
import SingleProductScreen from './Screens/SingleProductScreen';
//import routing for page navigation
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route exact path ="/products" element={<ProductScreen/>}/>
            <Route exact path ="/products/:id" element={<SingleProductScreen/>}/>


            <Route exact path ="/locations" element={<LocationsScreen/>}/>
            <Route exact path ="/about" element={<AboutScreen/>}/>
            <Route exact path ="/contact" element={<ContactScreen/>}/>
            

            
            <Route exact path ="/admin/addproduct" element={<AddProductScreen/>}/>
          </Routes>
        <Footer />
      </Router>
   </div>
  );
}

export default App;
