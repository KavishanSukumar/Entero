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
import serviceRegistrationRouter from "./routes/serviceRegistrationRoutes.js"
import CustomerAppointmentRouter from "./routes/CustomerAppointmentRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import portfolioSpRouter from "./routes/portfolioSpRoutes.js";
import portfolioContact from "./routes/portfolioContact.js";
import spPackages from "./routes/spPackagesRoutes.js";
import portfolioImages from "./routes/portfolioImagesRoutes.js";
//import spPortPics from "./sp_portfolio_images/10";
import adminCustomerRouter from "./routes/adminCustomerRoutes.js";
import adminServiceRouter from "./routes/adminServiceRoutes.js"
import getAllCusRouter from "./routes/getAllCusRoutes.js"
import getAllSpRouter from "./routes/getAllSpRoutes.js"

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
app.use(express.static("sp_portfolio_images"));
//app.use("/api/sp_portfolio_images",spPortPics);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/customer", customerRegistrationRouter);
app.use("/api/service", serviceRegistrationRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages",adminpaymentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/serviceprovider/portfoliosp", portfolioSpRouter);
app.use("/api/serviceprovider/portfoliocontact", portfolioContact);
app.use("/api/serviceprovider/sp_packages", spPackages);
app.use("/api/serviceprovider/portfolioimages", portfolioImages);
app.use("/api/admincustomer", adminCustomerRouter);
app.use("/api/allcus", getAllCusRouter);
app.use("/api/allsp", getAllSpRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
