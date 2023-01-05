import {Component, For, Show} from 'solid-js';
import {permissions} from '../../../config/permissions';
import { Text } from 'solid-i18n';
import { Link } from 'solid-app-router';
import {Button, Icon} from '@hope-ui/solid';
import IconPlus from '../../../atoms/Icons/Stroke/IconPlus';
import GeneralLoader from "../../shared/templates/GeneralLoader";
import UserCard from "../../user/organisms/UserCard/UserCard";
import FileCard from "../organisms/FileCard/FileCard";

const FileTemplate: Component = ( props ) =>
{
    return(
        <section class="section_container">
            <header class="section_header_container" data-parent={permissions.USERS.SAVE}>
                <h1 class="section_title">
                    <Text message="f_list" />
                </h1>

                <div class="has-permission">
                    <Link href={'/users/create'}>
                        <Button leftIcon={<Icon ><IconPlus/></Icon>}><Text message="u_create"/></Button>
                    </Link>
                </div>

                <Show when={ props.loading } >
                    <GeneralLoader/>
                </Show>

                <div class="grid_cards_container">
                    <Show when={!props.loading || props.fileList?.length}>
                        <For each={props.fileList} fallback={<div><Text message="u_no_list" />...</div>}>
                            {( user ) =>
                                <FileCard />
                            }
                        </For>
                    </Show>
                </div>
            </header>
        </section>
    );
};

export default FileTemplate;
