// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getRemoteConfig } from "firebase/remote-config";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAW_jtYkMcEa_DZIFYj2djdAN90sa_B-68",
	authDomain: "time-message-webbel.firebaseapp.com",
	projectId: "time-message-webbel",
	storageBucket: "time-message-webbel.appspot.com",
	messagingSenderId: "480556812229",
	appId: "1:480556812229:web:ca114b1a7355675fcaadac",
	measurementId: "G-HK284ZF79V",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, "asia-northeast1");
export const rdb = getDatabase(app);
export const storage = getStorage(app);

export const analytics =
	typeof window !== "undefined" ? getAnalytics(app) : null;
export const auth = getAuth(app);
