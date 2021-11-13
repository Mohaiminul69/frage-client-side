import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import ConfirmModal from "../../Shared/ConfirmModal/ConfirmModal";
// import ManageOrderCard from "../../Shared/ManageOrderCard/ManageOrderCard";
import Button from "@mui/material/Button";
import "./manageProduct.css";

const ManageProducts = () => {
  // Alert Modal
  // Alert Modal
  // Alert Modal
  const [alertText, setAlertText] = useState("");
  const [AlertOpen, setAlertOpen] = useState(false);
  const handleAlertModalOpen = () => setAlertOpen(true);
  const handleAlertModalClose = () => setAlertOpen(false);
  // Confirmation Modal
  // Confirmation Modal
  // Confirmation Modal
  const [orderId, setOrderId] = useState(0);
  const [confirmModalText, setConfirmModalText] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const handleConfirmModalClose = () => setConfirmModalOpen(false);
  const handleConfirmModalOpen = () => setConfirmModalOpen(true);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
<------------------- Getting all the orders from the database ------------------->
*/

  useEffect(() => {
    fetch("https://frozen-refuge-23457.herokuapp.com/perfumes/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  /*
<---------------------------- Canceling Order and deleteing from database ---------------------------->
*/
  const handleOrderDelete = (id) => {
    handleConfirmModalClose();
    fetch(`https://frozen-refuge-23457.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingOrders = products.filter((order) => order._id !== id);
          setProducts(remainingOrders);
          setAlertText("Perfume Deleted");
          handleAlertModalOpen();
        }
      });
  };

  const sendOrderIdToModal = (id) => {
    setConfirmModalText("delete product");
    setOrderId(id);
    handleConfirmModalOpen();
  };

  if (loading) {
    return (
      <Fragment>
        <div className="bgExplore py-3">
          <Container className="text-center my-3">
            <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
              Manage Products
            </h1>
            <div className="customHorizontalLine mb-5"></div>
            <CircularProgress />
          </Container>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="bgExplore py-3">
        <Container className="my-3">
          <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
            Manage Products
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product ID</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product._id}</td>
                  <td>
                    <img className="tableImg" src={product.img} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <Button
                      onClick={() => sendOrderIdToModal(product._id)}
                      variant="contained"
                      className="customBtn btn-red"
                    >
                      Delete Product
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Row>
            {products.map((product) => (
              <ManageOrderCard
                sendOrderIdToModal={sendOrderIdToModal}
                key={product._id}
                perfume={product}
              />
            ))}
          </Row> */}
        </Container>
      </div>
      <AlertModal
        AlertOpen={AlertOpen}
        alertText={alertText}
        handleAlertModalClose={handleAlertModalClose}
      />
      <ConfirmModal
        confirmModalText={confirmModalText}
        confirmModalOpen={confirmModalOpen}
        orderId={orderId}
        handleOrderDelete={handleOrderDelete}
        handleConfirmModalClose={handleConfirmModalClose}
      />
    </Fragment>
  );
};

export default ManageProducts;
