import MethodEnum from './enum/MethodEnum';
import PayloadProps from './interfaces/PayloadProps';
import GetHandler from './handlers/getHandler';
import { BACKEND_BASE_PATH, config } from './config/config';
import DeleteHandler from './handlers/deleteHandler';
import CreateHandler from './handlers/createHandler';
import UpdateHandler from './handlers/updateHandler';
const { baseUrl } = config.apiGateway.server;

class AbstractRepository {
    public async handle ( { queryParams, user, method, url, id, data }: PayloadProps ) {
        let URL = `${baseUrl}/${BACKEND_BASE_PATH}/${url}`;

        if( id ) URL += `/${id}`;

        if( method === MethodEnum.GET ) {
            const getUseCase = new GetHandler();

            return getUseCase.handle( { queryParams, user, url: URL } );
        }

        if( method === MethodEnum.POST ) {
            const createUseCase = new CreateHandler();

            return createUseCase.handle(  { data, user, url: URL } )
        }

        if( method === MethodEnum.PUT ) {
            const updateUseCase = new UpdateHandler();

            return updateUseCase.handle( { data, user, url: URL } );
        }

        if( method === MethodEnum.DELETE ) {
            const deleteUseCase = new DeleteHandler();

            return deleteUseCase.handle( { user, url: URL } );
        }
    }
}

export default AbstractRepository;
