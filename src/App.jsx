import Card from './Card.jsx'
import TopMenu from './TopMenu.jsx';
import BigImage from './BigImage.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';

function App(){

  return(
    <>
    <Login/>
      <BigImage/>
      <TopMenu/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App