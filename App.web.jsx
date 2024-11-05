  // import React from 'react'
  // import { View  , Text} from 'react-native'

  // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  // import Login from './component/Login';
  // import Home from './component/Home';
  // import Registration from './component/Registration';
  // import Data from './component/Profiles';

  // function Appweb() {
  //   return (
  //         <Router>
  //           <Routes>
  //             <Route path="/" element={<Login navigation={undefined} />} />
  //             <Route path="/Home" element={<Home navigation={{
  //                   navigate: function (screen: string): void {
  //                       throw new Error('Function not implemented.');
  //                   }
  //               }} />} />
  //             <Route path="/Registration" element={<Registration navigation={undefined} route={{
  //                   params: {
  //                       name: undefined,
  //                       email: undefined,
  //                       password: undefined,
  //                       id: undefined
  //                   }
  //               }} />} />
  //             <Route path="/Data" element={<Data navigation={undefined} />} />
  //           </Routes>
  //         </Router>
        
  //   )
  // }

  // export default Appweb;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Registration from './component/Registration';
import Data from './component/Profiles';
import { Switch } from 'react-native-gesture-handler';

function Appweb() {
  return (
    <Switch>
      <Routes>
        <Route path="/Home" element={<Login/>} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </Switch>
  );
}

export default Appweb;
