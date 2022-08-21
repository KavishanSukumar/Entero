import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function jwtTokens(userid) {
  const user = { user: userid };
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    // expiresIn: "15m",
    expiresIn: "2h",
  });
  // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
  //   // expiresIn: "20160 m",
  //   expiresIn: "5m",
  // });
  return token;
}

export default jwtTokens;
