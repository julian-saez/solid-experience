import { AxiosRequestConfig } from 'axios';
import { HttpAxiosRequest } from '../services/HttpAxiosRequest';
import { config } from './config';
import HttpRequest from '../services/HttpRequest';

const { protocol, hostname, port } = config.apiGateway.server;
const { getAll, remove, update, create, getOne } = config.apiGateway.routes.users;

class UserRepository {

    public getUsers = () => {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getAll}`
        };

        return HttpAxiosRequest(config);
    };

    public getOne = (id: string) => {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getOne}/${id}`
        };

        return HttpAxiosRequest(config);
    };


    public updateUser(id: string, body: any) {

        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${update}/${id}`,
            method: "PUT",
            data: body
        };

        return HttpAxiosRequest(config);

    };


    public createUser(body: any) {
        console.log('estoy en role reository create',JSON.stringify(body))
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${create}`,
            method: "POST",
            data: JSON.stringify(body)
        };

        return HttpAxiosRequest(config);
    };
    public removeUser(id: string) {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${remove}/${id}`,
            method: "DELETE"
        };

        return HttpAxiosRequest(config);
    }

}


export default UserRepository;
