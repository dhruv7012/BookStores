import express from "express";
import { PORT } from "./config.js";

// const PORT = 4000;

const app = express();

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("world hellow")
});

app.listen(PORT, () => {
    console.log(`App is listernign at port ${PORT}`)
});
