
import './App.css';
import Contact from "./assets/contact.jpg";
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-5">
           <ContactForm />
        </div>

      </div>
    </div>
  );
}

export default App;
