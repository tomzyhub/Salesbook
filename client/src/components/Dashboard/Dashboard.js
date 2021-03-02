import React from "react";
import Form from "../Form/Form";
import View from "../SalesView/View";
import addBtn from "../../assets/img/addbtn.png";
import ViewBtn from "../../assets/img/view.png";
import Home from "../../assets/img/home.png";
import { useHistory } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Dashboard() {
  const history = useHistory();
  return (
    <Router>
      <div>
        <div className="main-container">
          <div className="nav-container">
            <Link to="/" className="tags" onClick={() => history.push("/")}>
              <span className="salesbook">Salesbook</span>
            </Link>

            <Link to="/dashboard" className="tags">
              <img className="img-btn" src={Home} alt="home" />
              <span>Home</span>
            </Link>

            <Link to="/form">
              <img className="img-btn" src={addBtn} alt="add sales" />
              <span>Add sales</span>
            </Link>
            <Link to="/view">
              <img className="img-btn" src={ViewBtn} alt="view sales" />
              <span>view sales</span>
            </Link>
          </div>
          {/* display side */}
          <div className="main-side">
            <Switch>
              <Route path="/form" exact component={Form} />
              <Route path="/view" exact component={View} />
            </Switch>
            {/* <View /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
