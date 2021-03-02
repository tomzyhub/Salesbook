import React from "react";
import "../Form/Form.css";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      contact: "",
      item1: "",
      item2: "",
      Quantity: "",
      price: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // get data from db

  // getData() {
  //   axios
  //     .get("http://localhost:5000/api/")
  //     .then((res) => {
  //       console.log("get worked");
  //       // console.log(res);
  //       console.log(res.data);
  //     })
  //     .catch((errRes) => {
  //       alert(errRes);
  //     })
  //     .then((res) => {
  //       console.log(" axios finished");
  //     });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    // console.log(data);
    axios({
      method: "POST",
      url: "/api/",
      data: data,
    })
      .then((res) => {
        // alert("am done adding sales");
        this.setState({
          companyname: "",
          contact: "",
          item1: "",
          item2: "",
          Quantity: "",
          price: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // post form data

  render() {
    // const companyname = this.state.companyname;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <h3>Add your Today Sales</h3>
          {/* <p>{companyname}</p> */}
          <input
            type="text"
            value={this.state.companyname}
            placeholder="enter your business name"
            onChange={this.handleInputChange}
            name="companyname"
            required
          />
          <input
            type="text"
            value={this.state.contact}
            onChange={this.handleInputChange}
            name="contact"
            placeholder="enter your contact"
            required
          />
          <input
            type="text"
            name="item1"
            value={this.state.item1}
            onChange={this.handleInputChange}
            placeholder="enter item 1"
            required
          />
          <input
            type="text"
            name="item2"
            value={this.state.item2}
            onChange={this.handleInputChange}
            placeholder="enter  item 2"
            required
          />
          <input
            type="text"
            name="Quantity"
            value={this.state.Quantity}
            onChange={this.handleInputChange}
            placeholder="enter your Quantity"
            required
          />
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChange}
            placeholder="enter your price"
            required
          />
          <button className="btn-submit" type="submit">
            Send
          </button>
        </form>
        <p></p>
      </div>
    );
  }
}

export default Form;
