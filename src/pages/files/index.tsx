import { Component } from 'solid-js';
import PrivateLayout from '../../features/shared/layout/PrivateLayout/PrivateLayout';
import FileTemplate from '../../features/file/templates';

const IndexPage: Component = () =>
{
    return (
        <PrivateLayout>
            <FileTemplate />
        </PrivateLayout>
    );
};

export default IndexPage;
