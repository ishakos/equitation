import Visitor from "./components/Visitor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        {/*  */}
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" exact element={<Visitor />}></Route>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
