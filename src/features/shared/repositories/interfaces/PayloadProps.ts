import { Auth } from '../../../auth/interfaces';

interface PayloadProps {
    id?: string;
    method?: string;
    data?: any;
    url: string;
    queryParams?: any;
    user?: Auth;
}

export default PayloadProps;
