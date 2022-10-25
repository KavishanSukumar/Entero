import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import pg from "pg";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import setPasswordRouter from "./routes/setPasswordRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import serviceProviderRouter from "./routes/serviceProvicerApointments.js";
import adminpaymentsRouter from "./routes/paymentRoutes.js";
import customerRegistrationRouter from "./routes/customerRegistrationRoutes.js";
import CustomerAppointmentRouter from "./routes/CustomerAppointmentRoutes.js";
import BusinessPoliciesRouter from "./routes/Business&PoliciesRoutes.js";
import CustomerEventRouter from "./routes/CustomereventRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import portfolioSpRouter from "./routes/portfolioSpRoutes.js";
import portfolioContact from "./routes/portfolioContact.js";
import spPackages from "./routes/spPackagesRoutes.js";
import portfolioImages from "./routes/portfolioImagesRoutes.js";
import bookingsRouter from "./routes/bookingRoutes.js";
//import spPortPics from "./sp_portfolio_images/10";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";



import chatRoute from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import serviceProviderRegistrationRoutes from "./routes/serviceProviderRegistrationRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

import getAllCusRouter from "./routes/getAllCusRoutes.js";
import getAllSpRouter from "./routes/getAllSpRoutes.js";
import reportBookingsRouter from "./routes/reportBookingRouter.js";
import subIncomeRouter from "./routes/subscriptionRoutes.js";
import serviceProviderServicePayment from "./routes/ServiceProviderServicePayment.js";
import userProfilePicRoutes from "./routes/userProfilePicRoutes.js";

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

const httpServer = createServer();
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(express.json());
app.use(cors());

app.use(express.static("files"));
app.use(express.static("sp_portfolio_images"));
//app.use("/api/sp_portfolio_images",spPortPics);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/customerregistration", customerRegistrationRouter);
app.use("/api/chat", chatRoute);
app.use("/api/message", messageRoutes);
app.use("/api/serviceregistration", serviceProviderRegistrationRoutes);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages", adminpaymentsRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/customer", serviceProviderRegistrationRoutes);
app.use("/api/setpassword", setPasswordRouter);
app.use("/api/profile", profileRouter);
app.use("/api/review", reviewRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages", adminpaymentsRouter);
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/bpolicies", BusinessPoliciesRouter);
app.use("/api/customerevent", CustomerEventRouter);
app.use("/api/contact", contactRouter);
app.use("/api/serviceprovider/portfoliosp", portfolioSpRouter);
app.use("/api/serviceprovider/portfoliocontact", portfolioContact);
app.use("/api/serviceprovider/sp_packages", spPackages);
app.use("/api/serviceprovider/portfolioimages", portfolioImages);
app.use("/api/admincustomer", adminCustomerRouter);

app.use("/api/adminservice", adminServiceRouter);
app.use("/api/booking", bookingsRouter);
app.use("/api/serviceprovider/servicepayment", serviceProviderServicePayment);
app.use("/api/users/profilepicture", userProfilePicRoutes);

app.use("/api/allcus", getAllCusRouter);
app.use("/api/allsp", getAllSpRouter);
app.use("/api/reportbooking", reportBookingsRouter);
app.use("/api/subscriptionincome", subIncomeRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
