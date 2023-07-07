import './styles/global.css';
import './translate/index';

import App from './App'
import ReactDOM from 'react-dom/client'
import WarningModal from './components/warning-modal/WarningModal'

import { BrowserRouter } from 'react-router-dom';
import { ContextNotifProvider } from './contexts/ContextNotif'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextNotifProvider>
    <BrowserRouter>    
      <WarningModal/>
      <App />
    </BrowserRouter>
  </ContextNotifProvider>
)
