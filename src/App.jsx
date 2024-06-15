import './App.css';
import { CryptoContextProvider } from './context/crypto-context.jsx';
import AppLayout from './components/Layout/AppLayout.jsx';

function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}

export default App;
