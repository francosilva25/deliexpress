import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Footer from "../Footer";

const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "El Buen Sabor",
  content:
    "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
  category: "",
  _id: "",
};

function CreateProduct() {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState(initialState);
  const [images, setImages] = useState(false);

  const [isAdmin] = state.UserAPI.isAdmin;
  const [token] = state.token;

  const history = useNavigate();
  const param = useParams();

  const [products] = state.ProductsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.ProductsAPI.callback;

  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      products.forEach((product) => {
        if (product._id === param.id) {
          setProduct(product);
          setImages(product.images);
        }
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages(false);
    }
  }, [param.id, products]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an admin");
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      if (!isAdmin) return alert("You're not an admin");
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isAdmin) return alert("You're not an admin");
      if (!images) return alert("No Image Upload");

      if (onEdit) {
        await axios.put(
          `/api/products/${product._id}`,
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          "/api/products",
          { ...product, images },
          {
            headers: { Authorization: token },
          }
        );
      }
      setCallback(!callback);
      history.push("/");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <>
      <Container>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          py={5}
        >
          <Grid container>
            <Grid xs={12} item display="flex" justifyContent="center" alignItems="center">
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <CloudUploadIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Publicar producto
              </Typography>
            </Grid>
            <Grid item xs={12} py={2}>
              <TextField
                required
                fullWidth
                type="text"
                name="description"
                id="description"
                value={product.description}
                onChange={handleChangeInput}
                label="Ingresa el nombre de tu restaurante"
              />
            </Grid>
            <Grid item xs={12} py={2}>
              <TextField
                required
                fullWidth
                type="text"
                name="product_id"
                id="product_id"
                value={product.product_id}
                onChange={handleChangeInput}
                disabled={onEdit}
                label="Ingresa el ID de producto"
              />
            </Grid>
            <Grid item xs={12} py={2}>
              <TextField
                required
                fullWidth
                type="text"
                name="title"
                id="title"
                value={product.title}
                onChange={handleChangeInput}
                label="Ingresa el nombre de tu producto"
              />
            </Grid>
            <Grid item xs={6} py={2} px={1}>
              <TextField
                required
                fullWidth
                type="number"
                name="price"
                id="price"
                value={product.price}
                onChange={handleChangeInput}
                label="Ingresa el precio de tu producto"
              />
            </Grid>
            <Grid
              item
              xs={6}
              py={2}
              px={1}
              display="flex"
              justifyItems="center"
            >
              <Input
                type="file"
                name="file"
                id="file_up"
                onChange={handleUpload}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} py={2}>
              <TextField
                required
                fullWidth
                type="text"
                name="category"
                id="category"
                value={product.category}
                onChange={handleChangeInput}
                label="Ingresa la categoria del producto"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="content"
                label="Ingresa la descripcion del producto"
                type="text"
                id="content"
                onChange={handleChangeInput}
                multiline
                rows={5}
              />
            </Grid>
            <Grid xs={12} p={2} >
              <Button fullWidth variant="outlined" size="large" type="submit">
                Publicar Producto
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
      </>
  );
}

export default CreateProduct;
