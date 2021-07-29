
import './App.css';
import Contact from "./assets/contact.jpg";
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-4">
           <ContactForm />
        </div>
        <div className="col-md-7 offset-md-7">
          <img className="img-fluid w-100" src={Contact} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
