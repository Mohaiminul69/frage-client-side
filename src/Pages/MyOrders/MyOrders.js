import { CircularProgress } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ConfirmModal from "../Shared/ConfirmModal/ConfirmModal";
import ManageOrderCard from "../Shared/ManageOrderCard/ManageOrderCard";
import useAuth from "./../../Hooks/useAuth";
import AlertModal from "./../Shared/AlertModal/AlertModal";

const MyOrders = () => {
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

  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
<---------------------------- Getting order by User Email ---------------------------->
*/

  useEffect(() => {
    fetch(`https://frozen-refuge-23457.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [user.email]);

  /*
<---------------------------- Canceling Booking and deleteing from database ---------------------------->
*/
  const handleOrderDelete = (id) => {
    handleConfirmModalClose();
    fetch(`https://frozen-refuge-23457.herokuapp.com/deleteOrder/${id}`, {
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
              My Orders
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
            My Orders
          </h1>
          <div className="customHorizontalLine mb-5"></div>
          <Row>
            {orders.map((order) => (
              <ManageOrderCard
                sendOrderIdToModal={sendOrderIdToModal}
                key={order._id}
                perfume={order}
              />
            ))}
          </Row>
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

export default MyOrders;
