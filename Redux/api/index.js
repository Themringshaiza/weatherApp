import axios from 'axios'

export default requestWeather=(url)=>{
    alert("zip2")
      // alert("this weather function is invoked",url)
      return axios.get(url);
  }