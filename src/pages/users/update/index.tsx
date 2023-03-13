import { useParams } from 'solid-app-router';
import { Component, createMemo, createResource } from 'solid-js';
import { useApplicationContext } from '../../../context/context';
import AuthRepository from '../../../features/auth/repositories/AuthRepository';
import RoleRepository from '../../../features/role/repositories/RoleRepository';
import usePermission from '../../../features/shared/hooks/usePermission';
import PrivateLayout from '../../../features/shared/layout/PrivateLayout/PrivateLayout';
import UserRepository from '../../../features/user/repositories/UserRepository';
import UserUpdate from '../../../features/user/templates/UserUpdate/UserUpdate';
import { updateAction } from './handlers';
import AbstractRepository from '../../../features/shared/repositories/AbstractRepository';

const IndexPage: Component = () =>
{
    const { id } = useParams<{ id: string }> ();
    const [ user ]: any = useApplicationContext();
    const authRepository = new AuthRepository();
    const roleRepository = new RoleRepository();
    const userRepository = new UserRepository();
    const abstractRepository = new AbstractRepository();

    const [ userSelected ] = createResource( { user: user(), url: 'users', id }, abstractRepository.handle );
    const [ roles ] = createResource( { user: user() }, roleRepository.getRoles );
    const [ permissions ] = createResource( { user: user() }, authRepository.getAllPermissions );
    usePermission( user, [ roles, permissions, userSelected ] );

    const isLoading = createMemo( () => userSelected.loading || permissions.loading || roles.loading || permissions.loading );

    return (
        <PrivateLayout>
            <UserUpdate
                onUpdate={updateAction( { abstractRepository, id, user: user() } )}
                userSelected={userSelected()?.data}
                permissionsList={permissions()?.data}
                rolesList={roles()?.data}
                loading={isLoading()}
            />
        </PrivateLayout>
    );
};

export default IndexPage;
