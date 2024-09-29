import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

const AuthUser = async (req) => {
  console.log("req.headers.get(Authorization):", req.headers);

  const token = req.headers.get("Authoiation")?.split("=")[1];

  if (!token) return false;
  console.log("token: ", token);

  try {
    const extractAuthUserInfo = jwt.verify(token, "default_secret_key");
    console.log("extractAuthUserInfo:", extractAuthUserInfo);

    if (extractAuthUserInfo) return extractAuthUserInfo;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default AuthUser;
