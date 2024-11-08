// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './component/Login';
// import Home from './component/Home';
// import Registration from './component/Registration';
// import Data from './component/Data';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Registration" element={<Registration />} />
//         <Route path="/Data" element={<Data />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/screens/Login/Login';
import Home from '../src/screens/Home/Home';
import Registration from './screens/Registration';
import Data from './screens/Data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
