import PayloadProps from '../interfaces/PayloadProps';
import { AxiosRequestConfig } from 'axios';
import HttpService from '../../../../services/HttpService';

class DeleteUseCase {
    public handle ( { user, url }: PayloadProps )
    {
        const config: AxiosRequestConfig = {
            method: 'DELETE',
            url
        };

        return HttpService.request<any>( { config, user } );
    }
}

export default DeleteUseCase;
