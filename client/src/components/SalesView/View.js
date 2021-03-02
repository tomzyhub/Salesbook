import React, { Component } from "react";
import "../SalesView/View.css";
import axios from "axios";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Trash from "../../assets/img/paper-bin.png";

// const api = axios.create({
//   baseURL: `http://localhost:5000/api/`,
// });
class View extends Component {
  state = {
    sales: [],
  };
  constructor() {
    super();
    this.getSales();
  }

  componentDidMount() {
    this.getSales();
  }

  getSales = () => {
    axios
      .get("/api/")
      .then((result) => {
        // console.log(result.data);
        this.setState({ sales: result.data });
      })
      .catch((err) => console.log(err));
  };
  //pdf section
  // pdf converter function
  deleteSales = (_id) => {
    axios
      .delete(`/api/${_id}`)
      .then((data) => {
        // console.log(data);
        this.getSales();
      })
      .catch((err) => console.log(err));
  };

  printPdf = (event) => {
    event.preventDefault();
    let pdfBlock = document.getElementById("pdfprint");
    html2canvas(pdfBlock).then((canvas) => {
      const divImage = canvas.toDataURL("image/jpeg");

      const doc = new jsPDF("p", "mm");
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(25);
      doc.setFont("courier");
      doc.text(35, 35, "SalesBook");
      doc.addImage(divImage, "JPEG", 15, 40, 180, 80);
      // doc.addImage(divImage, "PNG", 15, 40, 180, 160);

      // doc.autoPrint();
      doc.save("saleReceipt.pdf");
    });
    // alert("maybe");
  };

  //delete item
  render() {
    return (
      <div className="big-cover">
        {this.state.sales.map((sale, index) => (
          <div className="view-container" key={sale._id}>
            <h2>Salesbook</h2>
            <div className="content" id="pdfprint">
              <p className="row">Name-: {sale.companyname}</p>
              <p className="row">Contact-: {sale.contact}</p>
              <p className="row">Product-: {sale.item1}</p>
              <p className="row">product-: {sale.item2} </p>
              <p className="row">Price-: N{sale.price}</p>
              <p className="row">Quantity-: {sale.Quantity}</p>
            </div>
            <button className="print-btn" onClick={this.printPdf}>
              print
            </button>
            <img
              className="trash"
              src={Trash}
              alt="Trash"
              onClick={() => this.deleteSales(sale._id)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default View;
