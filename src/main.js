import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Navbar from "./components/Navbar";
import Hisab from "./components/Hisab";
import JadwalList from "./components/JadwalList";

const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("hisab", Hisab);
app.component("jadwal-list", JadwalList);

app.mount("#app");
