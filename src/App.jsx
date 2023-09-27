import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './Home/Homepage';
import StartReg from './Home/StartReg';
import CustomerInfo from './Home/CustomerInfo';
import RoomInfo from './Home/RoomInfo';
import AmountCalculation from './Home/AmountCalculation';
import OrderSummary from './Home/OrderSummary';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route exact path="/" element={<StartReg />} />
            <Route path="/customerInfo" element={<CustomerInfo />} />
            <Route path="/roomInfo" element={<RoomInfo />} />
            <Route path="/totalCost" element={<AmountCalculation />} />
            <Route path="/ordersummary" element={<OrderSummary />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
