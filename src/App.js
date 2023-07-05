import './App.css';
import New from './new';
import Login from './Component/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom" // HashRouter
import Header from "./header"
function App() {
  return (
    // <HashRouter>
    //   <Switch>
    //       <Route exact path="/" component={New} />
    //       <Route path="/login" component={Login}  />
    //   </Switch>
    // </HashRouter>

    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<New />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
