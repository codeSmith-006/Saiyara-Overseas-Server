import admin from "firebase-admin";

/* ================= READ BASE64 KEY ================= */
const base64 = process.env.FB_SERVICE_KEY;

if (!base64) {
  throw new Error("FB_SERVICE_KEY environment variable is missing");
}

/* ================= DECODE BASE64 ================= */
const decodedJson = Buffer.from(base64, "base64").toString("utf-8");
const serviceAccount = JSON.parse(decodedJson);

/* ================= INIT FIREBASE ADMIN ================= */
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

/* ================= EXPORT ================= */
export const auth = admin.auth();
export const db = admin.firestore();
export default admin;
