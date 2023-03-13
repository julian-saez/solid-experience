import MethodEnum from './enum/MethodEnum';
import PayloadProps from './interfaces/PayloadProps';
import GetUseCase from './useCases/getUseCase';
import { BACKEND_BASE_PATH, config } from './config/config';
import DeleteUseCase from './useCases/deleteUseCase';
import CreateUseCase from './useCases/createUseCase';
import UpdateUseCase from './useCases/updateUseCase';
const { baseUrl } = config.apiGateway.server;

class AbstractRepository {
    public async handle ( { queryParams, user, method, url, id, data }: PayloadProps ) {
        let URL = `${baseUrl}/${BACKEND_BASE_PATH}/${url}`;

        if( id ) URL += `/${id}`;

        if( method === MethodEnum.GET ) {
            const getUseCase = new GetUseCase();

            return getUseCase.handle( { queryParams, user, url: URL } );
        }

        if( method === MethodEnum.POST ) {
            const createUseCase = new CreateUseCase();

            return createUseCase.handle(  { data, user, url: URL } )
        }

        if( method === MethodEnum.PUT ) {
            const updateUseCase = new UpdateUseCase();

            return updateUseCase.handle( { data, user, url: URL } );
        }

        if( method === MethodEnum.DELETE ) {
            const deleteUseCase = new DeleteUseCase();

            return deleteUseCase.handle( { user, url: URL } );
        }
    }
}

export default AbstractRepository;
