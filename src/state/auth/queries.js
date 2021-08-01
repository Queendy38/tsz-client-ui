import axios from 'axios';
import api from '../../utils/api';

const basePath = '/auth';

export const loadBox = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loginUser = payload => {
  return api
    .post(`${basePath}/login`, payload)
    .then(res => res.data)
    .catch(err => {
    //   var h1 = document.createElement("h1");
    //   h1.innerHTML = err.response.data.error.message;
    //   h1.style.color = "red";
    //   h1.id = "loginText";
    //   h1.style.marginLeft = "10px";
    //  // h1.style.marginRight = "auto";
    //   document.body.appendChild(h1);  
    //   setTimeout(function(){ h1.remove(); }, 3000);
      alert(err.response.data.error.message);
      throw err.response.data.error.message;
     // document.write("<h1>" + err.response.data.error.message + "</h1>");
      
    });
};
