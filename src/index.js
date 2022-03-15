import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InputFormProvider } from './Components/Input-Form-Context';
import { AddressDataProvider } from './Components/Address-Data-Context';

ReactDOM.render(
	<React.StrictMode>
		<InputFormProvider>
			<AddressDataProvider>
				<App />
			</AddressDataProvider>
		</InputFormProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
