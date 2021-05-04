const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

<<<<<<< HEAD
import { MailDetails } from "./apps/mail/pages/MailDetails.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { BookApp } from "./apps/book/BookApp.jsx";
import { MailApp } from "./apps/mail/MailApp.jsx";
import { NoteApp } from "./apps/note/NoteApp.jsx";
import { Home } from "./pages/Home.jsx";
=======
import { MailDetails } from './apps/mail/pages/MailDetails.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { BookApp } from './apps/book/BookApp.jsx';
import { MailApp } from './apps/mail/MailApp.jsx';
import { NoteApp } from './apps/note/NoteApp.jsx';
import { NoteModal } from './apps/note/cmps/NoteModal.jsx';
import { Home } from './pages/Home.jsx';
>>>>>>> a3e15067b6b8f780d0027c1adb0714d73a0e48aa


export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route component={MailDetails} path='/mail/:mailId' />
          <Route component={NoteApp} path='/note' />
          <Route component={MailApp} path='/mail' />
          <Route component={BookApp} path='/book' />
          <Route component={Home} path={'/'} />
        </Switch>
      </main>
    </Router>
  );
}
