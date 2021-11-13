import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import AlertModal from "../../Shared/AlertModal/AlertModal";
import ConfirmModal from "../../Shared/ConfirmModal/ConfirmModal";
import Button from "@mui/material/Button";

const ManageOrders = () => {
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

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
<------------------- Getting all orders from all the users from database ------------------->
*/

  useEffect(() => {
    fetch(`https://frozen-refuge-23457.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [orders]);

  /*
<-------------------- Approving the Order and Changing Status by Updating Database -------------------->
*/
  const handleApprove = (id) => {
    const update = { status: true };
    fetch(`https://frozen-refuge-23457.herokuapp.com/approveOrder/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setOrders(orders);
          setAlertText("Order Shipped");
          handleAlertModalOpen();
        }
      });
  };

  /*
<---------------------------- Canceling Order and deleteing from database ---------------------------->
*/
  const handleOrderDelete = (id) => {
    handleConfirmModalClose();
    fetch(`https://frozen-refuge-23457.herokuapp.com/cancelOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
          setAlertText("Order Canceled");
          handleAlertModalOpen();
        }
      });
  };

  const sendOrderIdToModal = (id) => {
    setConfirmModalText("cancel order");
    setOrderId(id);
    handleConfirmModalOpen();
  };

  if (loading) {
    return (
      <Fragment>
        <div className="bgExplore py-3">
          <Container className="text-center my-3">
            <h1 className="diplay-4 fw-light text-uppercase text-center mb-3">
              Manage Orders
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
            Manage Orders
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Order Status</th>
                <th>Update Status</th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="tableImg" src={order.img} alt="" />
                  </td>
                  <td>{order.customerName}</td>
                  <td>{order.name}</td>
                  <td>
                    {order.status === false ? (
                      <span className="text-danger">Pending</span>
                    ) : (
                      <span className="text-success">Shipped</span>
                    )}
                  </td>
                  <td>
                    <Button
                      onClick={() => handleApprove(order._id)}
                      variant="contained"
                      className="btn-green"
                    >
                      Ship Order
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={() => sendOrderIdToModal(order._id)}
                      variant="contained"
                      className="btn-red"
                    >
                      Cancel Order
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Row>
            {orders.map((product) => (
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

export default ManageOrders;
