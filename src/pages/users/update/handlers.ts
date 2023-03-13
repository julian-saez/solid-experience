import { UserPayload } from '../../../features/user/interfaces';
import UserRepository from '../../../features/user/repositories/UserRepository';
import { LoginApi } from '../../../features/auth/interfaces/login';

type params = {
    abstractRepository: any;
    id: string;
    user: LoginApi;
};

export const updateAction = ( { abstractRepository, user, id }: params ) => async ( data: UserPayload ) =>
{
    const rolesSelected = {
        rolesId: Array.from( data.roles as [] ),
    };

    delete data.roles;
    void await abstractRepository.handle( { user, method: 'PUT', url: 'users', id, data } );

    // AssignUserRole roles
    void await abstractRepository.handle( { user, method: 'PUT', url: 'users', id, data: rolesSelected } );
};
