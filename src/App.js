import './App.css';
import './index.css';
import { Header } from './Components/Header';
import { InputFormController } from './Components/InputFormController';
import { AddressList } from "./Components/AddressList";

function App() {
  return (
    <div className="App centered-flex-col-container">
      <Header/>
      <InputFormController/>
      <AddressList />
    </div>
  );
}

export default App;
