import {
  Button,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import PaypalButton from "./PaypalButton";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.UserAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      "/api/payment",
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };
  if (cart.length === 0)
    return (
      <Container>
        <Box dislpay="flex">
          <Grid container>
            <Grid items xs={12} pt={4}>
              <Typography
                variant="h5"
                component="h2"
                display="flex"
                justifyContent="center"
                pt={10}
              >
                Carrtio de compras vacio
              </Typography>
            </Grid>
            <Grid xs={12} pt={4} display="flex" justifyContent="center">
              <Link id="btn_buy" href="/" sx={{ textDecoration: "none" }}>
                <Button size="medium" variant="contained">
                  Comprar
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );

  return (
    <Container>
      <Box>
        <Grid container>
          {cart.map((product) => (
            <Grid item xs={12} key={product._id}>
              <Grid container pt={5}>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    image={product.images.url}
                    height="250px"
                    alt=""
                  />
                </Grid>
                <Grid item xs={6} px={4}>
                  <Typography variant="h4">{product.title}</Typography>
                  <Typography variant="body1">
                    S/. {product.price * product.quantity}
                  </Typography>
                  <Typography variant="body2">{product.description}</Typography>
                  <Grid xs={12} py={2}>
                    <button onClick={() => decrement(product._id)}> - </button>
                    <Typography variant="h7" px={2}>
                      {product.quantity}
                    </Typography>
                    <button onClick={() => increment(product._id)}> + </button>
                  </Grid>
                  <Button variant="outlined" size="large">
                    Eliminar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12} pt={4}>
            <PaypalButton total={total} tranSuccess={tranSuccess} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
