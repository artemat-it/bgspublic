import fs from "fs";
import path from "path";
import https from 'https' 

import axios from "axios";
import axiosCookieJarSupport from "axios-cookiejar-support";
import tough from "tough-cookie";

let baseURL="http://localhost"
axiosCookieJarSupport.default(axios);
axios.defaults.jar = new tough.CookieJar();
axios.defaults.withCredentials = true;
axios.defaults.headers = { "Referrer": baseURL };
