import PayloadProps from '../interfaces/PayloadProps';
import { AxiosRequestConfig } from 'axios';
import HttpService from '../../../../services/HttpService';

class GetUseCase {
    public handle ( { queryParams, user, url }: PayloadProps )
    {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url
        };

        return HttpService.request<any>( { config, queryParams, user } );
    }
}

export default GetUseCase;
