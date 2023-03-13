import { UserPayload } from '../../../features/user/interfaces';
import UserRepository from '../../../features/user/repositories/UserRepository';
import { LoginApi } from '../../../features/auth/interfaces/login';

type params = {
    abstractRepository: any;
    user: LoginApi;
};

export const createAction = ( { abstractRepository, user }: params ) => async ( data: UserPayload ) =>
{
    const rolesSelected = {
        rolesId: Array.from( data.roles as [] ),
    };

    delete data.roles;
    const response = await abstractRepository.handle( { user, method: 'POST', url: 'users', data } );

    if ( rolesSelected )
    {
        const { id } = response.data;
        void await abstractRepository.handle( { user, method: 'PUT', url: 'users', data: rolesSelected, id } );
    }
};
