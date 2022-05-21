import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import ".././src/base/i18n/i18n";
import { Pages } from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense>
          <Header />
          <Pages />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
