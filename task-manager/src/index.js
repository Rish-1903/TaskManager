import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store'; // Redux store
import { DndProvider } from 'react-dnd'; // DndProvider
import { HTML5Backend } from 'react-dnd-html5-backend'; // HTML5 backend for react-dnd

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux Provider */}
      <DndProvider backend={HTML5Backend}> {/* DndProvider with HTML5 backend */}
        <App />
      </DndProvider>
    </Provider>
  </React.StrictMode>
);

// Optional: Performance measurement
reportWebVitals();
