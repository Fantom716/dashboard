import './App.css';
import BigCard from './components/cards/big card/big-card';
import SmallCard from './components/cards/small card/small-card';
import Navigation from './components/nav/navigation.jsx'
import InformationCard from './components/cards/card for information/informationCard';

function App() {
  return (
    <>
      <InformationCard />
      <Navigation name="Alexander" />
      <BigCard />
      <SmallCard />
      <InformationCard titleCard="Менеджеры" name="Шеншин Акентий" mail="tefecreunnitta-4734@yopmail.com"/>
    </>
  );
}

export default App;
