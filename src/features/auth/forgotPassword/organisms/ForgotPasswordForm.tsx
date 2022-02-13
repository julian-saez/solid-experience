import { Component } from 'solid-js';
import { Form } from 'solid-js-form';
import Button from '../../../../atoms/Button';
import Input from '../../../../atoms/Input';
import Title from '../../../../atoms/Title';
import ForgetPasswordSchema from '../../../../SchemaValidations/ForgetPasswordSchema';
import { handleSubmit } from './handlers';

interface ForgotPasswordFormProps
{
    onClick: ( event: MouseEvent ) => void;
}

const ForgotPasswordForm: Component<ForgotPasswordFormProps> = ( props ) => (
    <Form
        initialValues={{ email: '' }}
        // class="flex flex-col h-4/5"
        validation={ForgetPasswordSchema}
        onSubmit={handleSubmit()}
    >
        <Title titleType="h1" class="mb-2 text-left text-xs font-extrabold text-main-gray-250 w-full">
            ACCOUNT RECOVERY
        </Title>
        <div>
            <Input
                name="email"
                type="text"
                id="email"
                class="dg-form-field-full  pl-5"
                placeholder="Your Email"
                labelClass="text-main-gray-200 block mb-2"
                labelName="Email"
            />
        </div>
        <div class="flex items-center mt-6 justify-between w-full">
            <Button
                onClick={props.onClick}
                class="flex mx-auto text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-full text-sm font-bold"
            >
                Cancel
            </Button>
            <Button
                type="submit"
                class="mx-auto text-white bg-primary-main border-0 py-2 px-6 focus:outline-none hover:bg-primary-hover rounded-full text-sm font-bold text-center"
            >
                Send
            </Button>
        </div>
    </Form>
);

export default ForgotPasswordForm;
