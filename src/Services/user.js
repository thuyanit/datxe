import {restConnector} from './index';
import {history} from "../Layouts/layout"

class UserService{
    login(data) {
        restConnector({
            url: '/users/login',
            method: "POST",
            data
        }).then(res=>{
            //console.log(res);
            localStorage.setItem("token", res.data.token);
            restConnector.defaults.headers['Authorization'] = res.data.token;
            history.push('/');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}

export default new UserService();