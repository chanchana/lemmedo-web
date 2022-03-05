import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavigationProvider } from './contexts/navigation';
import { ResponsiveProvider } from './contexts/responsive';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
    React.useEffect(() => {
        smoothscroll.polyfill();
    }, [])
    return (
        <React.Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <NavigationProvider>
                    <ResponsiveProvider>
                        <Home />
                    </ResponsiveProvider>
                </NavigationProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
