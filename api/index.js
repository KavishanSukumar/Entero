import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import adminCustomerRouter from "./routes/adminCustomerRoutes.js";
import adminServiceRouter from "./routes/adminServiceRoutes.js";
import authRouter from "./routes/authRoutes.js";
import chatRoute from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import CustomerAppointmentRouter from "./routes/CustomerAppointmentRoutes.js";
import customerRegistrationRouter from "./routes/customerRegistrationRoutes.js";
import adminpaymentsRouter from "./routes/paymentRoutes.js";
import serviceProviderRouter from "./routes/serviceProvicerApointments.js";
import serviceProviderRegistrationRoutes from "./routes/serviceProviderRegistrationRoutes.js";
import userRouter from "./routes/userRoutes.js";

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
app.use("/api/customer/appointment", CustomerAppointmentRouter);
app.use("/api/serviceprovider/appointment", serviceProviderRouter);
app.use("/api/admin/packages", adminpaymentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admincustomer", adminCustomerRouter);
app.use("/api/adminservice", adminServiceRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
