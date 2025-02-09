// // Import necessary modules and components
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header.jsx'; // Include .jsx extension
// import Dashboard from './components/Dashboard.jsx'; // Include .jsx extension
// import Order from './components/Order.jsx'; // Include .jsx extension
// import LandingPage from './components/LandingPage.jsx'; // Include .jsx extension
// import InventoryPage from './components/InventoryPage.jsx'; // Include .jsx extension
// // import Signup from './components/Signup.js';
// // import Login from './components/Login.js';
// import './App.css';

// function App() {
//   return (
//     <Router>

//         <Header />

//           <Routes>
//             <Route path="/" element={<LandingPage />} /> {/* Correctly importing and using LandingPage */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             {/* Uncomment the following line if MapVisualization is used */}
//             {/* <Route path="/map" element={<MapVisualization />} /> */}
//             <Route path="/order" element={<Order />} />
//             <Route path="/inventory" element={<InventoryPage />} />
//             {/* <Route path="/login" element={<Login />} /> */}
//              {/* <Route path="/signup" element={<Signup />} /> */}
//             {/* Add more routes as needed */}
//           </Routes>


//     </Router>
//   );
// }

// export default App;

// Import necessary modules and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'; // Include .jsx extension
import Dashboard from './components/Dashboard.jsx'; // Include .jsx extension
import Order from './components/Order.jsx'; // Include .jsx extension
import LandingPage from './components/LandingPage.jsx'; // Include .jsx extension
import InventoryPage from './components/InventoryPage.jsx'; // Include .jsx extension
// import Signup from './components/Signup.js';
// import Login from './components/Login.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Correctly importing and using LandingPage */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Uncomment the following line if MapVisualization is used */}
          {/* <Route path="/map" element={<MapVisualization />} /> */}
          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<InventoryPage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

