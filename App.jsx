const Router = ReactRouterDOM.HashRouter
const {Route, Switch} = ReactRouterDOM

import {AppHeader} from './cmps/AppHeader.jsx'

export function App() {
    return(
        <Router>
            <main>
        <AppHeader />
            </main>
        </Router>
    )
}