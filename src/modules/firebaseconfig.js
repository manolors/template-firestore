const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY || "error",
  authDomain: import.meta.env.VITE_AUTHDOMAIN || "error",
  projectId: import.meta.env.VITE_PROJECTID || "error",
  storageBucket: import.meta.env.VITE_STORAGEBUCKET || "error",
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID || "error",
  appId: import.meta.env.VITE_APPID || "error"
};

export default firebaseConfig;
