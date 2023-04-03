import { Route, Routes } from "react-router-dom";

import AppHeader from "./layouts/AppHeader.jsx";

function App(){
  return(
    <div className="App">
      test
      <AppHeader/>
      {/* <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard_Page/>}/>
        </Routes>
      </MainLayout> */}
    </div>
  );
}
export default App;