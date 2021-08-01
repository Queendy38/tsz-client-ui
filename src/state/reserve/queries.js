import axios from 'axios';
import api from '../../utils/api';

const basePath = '/reserve';

export const loadBox = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => err.response.data);
    
};

export const bookWorkspace = payload => {
  return api
    .post(`${basePath}`, payload)
    .then(res => res.data)
    .catch(err => {
      // var h1 = document.createElement("h1");
      //   h1.innerHTML = err.response.data.message;
      //   h1.style.color = "red";
      //   h1.style.marginLeft = "10px";
      //   h1.style.marginTop = "10px";
      // document.body.appendChild(h1);
      // setTimeout(function(){ h1.remove(); }, 3000);
      alert(err.response.data.message);
    //  document.write("<h1>" + err.response.data.message + "</h1>");
    });
};
