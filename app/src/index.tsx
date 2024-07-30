/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import Landing from './pages/Landing';
import { WindowsContextProvider } from './context/WindowsContext';
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
<WindowsContextProvider>
  <Router root={Landing}>
      <Route path="/" component={Landing}></Route>
  </Router>
</WindowsContextProvider>
), root!);
