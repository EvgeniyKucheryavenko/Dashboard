import React from 'react';
import './scss/style.scss';
import Sidebar from "./components/Sidebar";
import DashboardApp from "./components/DashboardApp";
const App = () => {
    return (
        <>
           <div className="dashboard">
               <Sidebar/>
               <DashboardApp/>
           </div>
            <div className="shapes_1"></div>
            <div className="shapes_2"></div>
            <div className="shapes_3"></div>
        </>
    );
};

export default App;