const express = require("express");
const router = express.Router();
const Receipt = require("../../models/Receipt");

// gets all the post
router.get("/", async (req, res) => {
  try {
    const showreceipt = await Receipt.find();
    res.json(showreceipt);
  } catch (error) {
    res.json({ message: error });
  }
});

// submits a post
router.post("/", async (req, res) => {
  try {
    const receipt = await new Receipt({
      companyname: req.body.companyname,
      contact: req.body.contact,
      item1: req.body.item1,
      item2: req.body.item2,
      Quantity: req.body.Quantity,
      price: req.body.price,
    });

    await receipt.save();
    console.log("a done saving...");
    res.json(receipt);
  } catch (error) {
    console.log(error);
  }
});

// getting a single document with id
router.get("/:ReceiptId", async (req, res) => {
  try {
    const receipt_single = await Receipt.findById(req.params.ReceiptId);
    res.json(receipt_single);
  } catch (error) {
    res.json(error);
  }
});

// delete receipts

router.delete("/:receiptId", async (req, res) => {
  try {
    const deleteReceipt = await Receipt.deleteOne({
      _id: req.params.receiptId,
    });
    console.log("file deleted..");
    res.json(deleteReceipt);
  } catch (error) {
    res.json(error);
  }
});

// updating the receipt
router.patch("/:receiptId", async (req, res) => {
  try {
    const updateReceipt = await Receipt.updateOne(
      {
        _id: req.params.receiptId,
      },
      { $set: { companyname: req.body.companyname } }
    );

    console.log("file updated!..");
    res.json(updateReceipt);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
