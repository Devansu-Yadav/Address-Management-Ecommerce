import './App.css';
import './index.css';
import { Header } from './Components/Header';
import { InputFormController } from './Components/InputFormController';
import { AddressList } from "./Components/AddressList";
import { InputForm } from './Components/InputForm';
import { useInputForm } from './Components/Input-Form-Context';

const App = () => {
  const { isFormControllerAdded } = useInputForm();

  return (
    <div className="App centered-flex-col-container">
      <Header/>
      <InputFormController/>
      { isFormControllerAdded && <InputForm/> }
      <AddressList />
    </div>
  );
}

export default App;
