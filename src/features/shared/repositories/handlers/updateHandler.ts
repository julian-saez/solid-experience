import PayloadProps from '../interfaces/PayloadProps';
import { AxiosRequestConfig } from 'axios';
import HttpService from '../../../../services/HttpService';

class UpdateHandler
{
    public handle ( { user, url, data }: PayloadProps )
    {
        const config: AxiosRequestConfig = {
            method: 'PUT',
            url,
            data
        };

        return HttpService.request<any>( { config, user } );
    }
}

export default UpdateHandler;
