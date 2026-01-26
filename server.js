const express = require('express')
const app = express();
const PORT = 3009;
app.use(express.json());


const userroutes=require("./routes/userRoutes")
const categoryRoutes =require("./routes/categoryRoutes")
const authrouter =require("./routes/authRouter")
const varientrouter =require("./routes/variantRoutes")
const productvariantrouter =require("./routes/productvariantRouter")
const productRouter =require("./routes/productRouter")
const inventoryRouter =require("./routes/inventoryRouter")
const orderRouter =require("./routes/orderRouter")
app.use("/api",userroutes)
app.use("/api",authrouter)
app.use("/api1",categoryRoutes)
app.use("/api",varientrouter)
app.use("/api",productvariantrouter)
app.use("/api",productRouter)
app.use("/api",inventoryRouter)
app.use("/api",orderRouter)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
