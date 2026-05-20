import { HashRouter } from 'react-router-dom';
import { PrepProvider } from './context/PrepContext';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <HashRouter>
      <PrepProvider>
        <AppRouter />
      </PrepProvider>
    </HashRouter>
  );
}
