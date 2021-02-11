import React from 'react'
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Header from './componentes/Header';
import Blog from './componentes/Blog';
import Acerca_de from './componentes/Acerca_de';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>

        <main>
          <Route path="/" exact={true}>
            <div>
              <h2>Pagina de inicio</h2>
              <p>Esta es la pagina principal de nuestro sitio</p>
            </div>
          </Route>

          <Route path="/blog">
            <Blog/>
          </Route>

          <Route path="/acerca-de">
            <Acerca_de/>
          </Route>
        </main>
    </div>
    </BrowserRouter>
  );
};

export default App;