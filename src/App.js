// import logo from './logo.svg';
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard 
          id={0} 
          name={'Reptilian Punk'} 
          traits={[{'value': 7}]} 
          image='https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg'/>
    </div> 
  );
}

export default App;
