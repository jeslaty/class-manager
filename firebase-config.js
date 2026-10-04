import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxR-D827gVgMWU9ouZYFFSCHzj3CNsSp8",
  authDomain: "class-manager-64895.firebaseapp.com",
  projectId: "class-manager-64895",
  storageBucket: "class-manager-64895.firebasestorage.app",
  messagingSenderId: "351951765446",
  appId: "1:351951765446:web:c9f69195a317632f50bcc7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/*
  使用 session persistence：
  關閉瀏覽器分頁 / 視窗後，登入狀態不會永久留在公用電腦。
*/
setPersistence(auth, browserSessionPersistence);

export { app, auth };
