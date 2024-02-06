import axios, {AxiosInstance} from 'axios'
import { CorsOrigin } from 'vite'
const express = require('express');
const cors = require("cors"); //this is a library to config easily cors

const axiosInstance : AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': 'GET,POST,OPTIONS,DELETE,PUT',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)' 
    }
})
export default axiosInstance;