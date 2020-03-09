import {restConnector} from './index';
import {history} from "../Layouts/layout"

class TripsService{
    getTrips(params) {
        restConnector({
            url: '/trips',
            method: "GET",
            params
        }).then(res=>{
            console.log(res);
            // localStorage.setItem("token", res.data.token);
            // restConnector.defaults.headers['Authorization'] = res.data.token;
            // history.push('/');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}

export default new TripsService();