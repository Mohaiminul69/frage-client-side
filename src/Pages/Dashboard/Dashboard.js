import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddProduct from "./AddProduct/AddProduct";
import useAuth from "./../../Hooks/useAuth";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import MyOrders from "../MyOrders/MyOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import ManageOrders from "./ManageOrders/ManageOrders";
import UserReview from "./UserReview/UserReview";
import Button from "@mui/material/Button";
import "./dashboard.css";
import Payment from "./PaymentPage/Payment";
import Test from "../Test/Test";

const drawerWidth = 240;

function Dashboard(props) {
  const { admin, logout } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List className="dashBoardLinks">
        <Link to="/home">
          <ListItem button>
            <ListItemIcon>
              <i className="fas fa-home"></i>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        {admin ? (
          <React.Fragment>
            <Link to={`${url}/manageOrders`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-trash-alt"></i>
                </ListItemIcon>
                <ListItemText primary="Manage Orders" />
              </ListItem>
            </Link>
            <Link to={`${url}/addProduct`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-box"></i>
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItem>
            </Link>
            <Link to={`${url}/makeAdmin`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-user-cog"></i>
                </ListItemIcon>
                <ListItemText primary="Make Admin" />
              </ListItem>
            </Link>
            <Link to={`${url}/manageProducts`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-trash-alt"></i>
                </ListItemIcon>
                <ListItemText primary="Manage Products" />
              </ListItem>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to={`${url}/makePayment`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="far fa-credit-card"></i>
                </ListItemIcon>
                <ListItemText primary="Make Payment" />
              </ListItem>
            </Link>
            <Link to={`${url}/myOrders`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="fas fa-boxes"></i>
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItem>
            </Link>
            <Link to={`${url}/review`}>
              <ListItem button>
                <ListItemIcon>
                  <i className="far fa-comment-dots"></i>
                </ListItemIcon>
                <ListItemText primary="Review" />
              </ListItem>
            </Link>
          </React.Fragment>
        )}
        <ListItem button>
          <ListItemIcon>
            <i className="fas fa-sign-out-alt"></i>
          </ListItemIcon>
          <Button
            className="customBtn btn-red"
            onClick={logout}
            variant="contained"
          >
            Logout
          </Button>
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="fix">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="bg-dark d-flex justify-content-between toolBar">
          <div className="d-flex align-items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </div>
          <Button className="btn-red" onClick={logout} variant="contained">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className="customBox"
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Test />
          </Route>
          <Route path={`${path}/makePayment`}>
            <Payment />
          </Route>
          <Route path={`${path}/review`}>
            <UserReview />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
