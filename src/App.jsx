import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";
import './App.css';

function App() {
  return (
    <>
      <MyNavbar />
      <MovieGallery searchQuery="Harry Potter" sectionTitle="Harry Potter"/>
      <MovieGallery searchQuery="Lord of the Rings" sectionTitle="Lord of the Rings"/>
      <MovieGallery searchQuery="Star Wars" sectionTitle="Star Wars"/>
      <MyFooter />
    </>
  );
}

export default App;