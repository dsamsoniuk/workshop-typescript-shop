import express from "express";
import cors from "cors";
import { ProductList } from "../share/interfaces/product-list.interface";
import { setupBaseRoutes } from "./api/routes/base.routes";
import { setupProductsRoutes } from "./api/routes/products.routes";

// const express = require("express");
const app = express();

app.use(cors({
    origin: 'http://localhost:4001'
}));

setupBaseRoutes(app);
setupProductsRoutes(app);

app.listen(4000, () => {

    console.log(`Serwer odpalony na http:localhost:4000`);

});