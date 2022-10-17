import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pg from "pg";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import setPasswordRouter from "./routes/setPasswordRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import serviceProviderRouter from "./routes/serviceProvicerApointments.js";
import adminpaymentsRouter from "./routes/paymentRoutes.js"
import customerRegistrationRouter from "./routes/customerRegistrationRoutes.js";
import serviceRegistrationRouter from "./routes/serviceRegistrationRoutes.js"
import CustomerAppointmentRouter from "./routes/CustomerAppointmentRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import adminCustomerRouter from "./routes/adminCustomerRoutes.js";
import adminServiceRouter from "./routes/adminServiceRoutes.js"

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
app.use(express.static('files'))

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/setpassword", setPasswordRouter);
app.use("/api/customer", customerRegistrationRouter);
app.use("/api/service", serviceRegistrationRouter);
app.use("/api/profile",profileRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages",adminpaymentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admincustomer", adminCustomerRouter);
app.use("/api/adminservice", adminServiceRouter);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
