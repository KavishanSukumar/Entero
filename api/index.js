import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pg from "pg";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import serviceProviderRouter from "./routes/serviceProvicerApointments.js";
import adminpaymentsRouter from "./routes/paymentRoutes.js"
import customerRegistrationRouter from "./routes/customerRegistrationRoutes.js";
import CustomerAppointmentRouter from "./routes/CustomerAppointmentRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import portfolioSpRouter from "./routes/portfolioSpRoutes.js";
import portfolioContact from "./routes/portfolioContact.js"

dotenv.config();

let localPoolConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: "process.env.URL",
  credentials: true || "*",
};
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/customer", customerRegistrationRouter);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages",adminpaymentsRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/contact", contactRouter);
app.use("/api/serviceprovider/portfoliosp", portfolioSpRouter);
app.use("/api/serviceprovider/portfoliocontact", portfolioContact);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
