import PayloadProps from '../interfaces/PayloadProps';
import { AxiosRequestConfig } from 'axios';
import HttpService from '../../../../services/HttpService';

class CreateHandler
{
    public handle ( { data, user, url }: PayloadProps )
    {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url,
            data
        };

        return HttpService.request<any>( { config, user } );
    }
}

export default CreateHandler;
