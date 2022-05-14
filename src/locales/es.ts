import { I18nLocales } from 'i18n-mini/lib/types';

const app: I18nLocales = {
    a_account_created: 'Cuenta creada. Tenant: {tenant_slug}',
    a_actions: 'Acciones',
    a_add: 'Agregar',
    a_autocomplete: 'Autocompletar',
    a_basic_information: 'Información Básica',
    a_cancel: 'Cancelar',
    a_change_password: 'Cambiar Contraseña',
    a_choose_birthday: 'Ingresar Fecha de Nacimiento...',
    a_choose_date_from: 'Ingresar Fecha desde...',
    a_choose_date_to: 'Ingresar Fecha hasta...',
    a_clear: 'Limpiar',
    a_close: 'Cerrar',
    a_code: 'Código',
    a_contact_description: 'Descripción de tipo de contacto',
    a_contact_information: 'INFORMACION DE CONTACTO',
    a_contact_type_and_description: 'Tipo y descripción de contacto',
    a_contact_type: 'Tipo de contacto',
    a_create_account: 'Crear Cuenta',
    a_create: 'Crear',
    a_dashboard: 'Panel de control',
    a_data_type: 'Tipo de dato',
    a_delete: 'Eliminar',
    a_description: 'Descripción',
    a_dont_have_account: '¿No tenés cuenta?',
    a_en: 'Inglés',
    a_enter_balance: 'Ingresar Balance',
    a_enter_business_name: 'Ingrese nombre del negocio',
    a_enter_calculation_value: 'Ingrese valor de cálculo',
    a_enter_code: 'Ingresar código',
    a_enter_color: 'Ingrese color',
    a_enter_company: 'Seleccionar compañia',
    a_enter_contact_type: 'Ingresar Tipo de contacto',
    a_enter_contact: 'Ingresar dato de contacto',
    a_enter_default_list: 'Ingresar lista por defecto',
    a_enter_description: 'Ingresar descripción',
    a_enter_fantasy_name: 'Ingresar nombre de fantasia',
    a_enter_first_name: 'Ingresar Nombre',
    a_enter_id_number: 'Ingresar Número de Documento',
    a_enter_last_name: 'Ingresar Apellido',
    a_enter_name: 'Ingresar Nombre',
    a_enter_organization_slug: 'Ingresar organización',
    a_enter_organization: 'Ingresar Organización',
    a_enter_payment_method: 'Ingrese método de pago',
    a_enter_permissions: 'Seleccionar Permisos',
    a_enter_phone: 'Ingresar Teléfono',
    a_enter_slug: 'Ingresar Slug',
    a_enter_tax_condition: 'Ingresar condición fiscal',
    a_enter_type: 'Ingresar Tipo',
    a_enter_value: 'Ingresar valor',
    a_es: 'Español',
    a_filter_by: 'Filtrar por',
    a_filter_field: 'Campo de filtro',
    a_filter: 'Filtrar',
    a_gender_other: 'otro',
    a_home: 'Inicio',
    a_legal_person: 'PERSONA LEGAL',
    a_list: 'Listado',
    a_loading: 'Cargando',
    a_login: 'Iniciar sesión',
    a_logout: 'Cerrar sesión',
    a_name: 'nombre',
    a_new: 'Nuevo',
    a_no_data: 'No hay datos',
    a_no: 'no',
    a_order_by: 'Ordenar por',
    a_order_field: 'Campo de ordenamiento',
    a_organization_information: 'Información de la organización',
    a_password: 'Contraseña',
    a_payment_type: 'Tipos de pago',
    a_personal_information: 'Información Personal',
    a_register: 'Registrarse',
    a_reload: 'Recargar',
    a_repeat_password: 'Repetir Contraseña',
    a_reset: 'Reiniciar',
    a_save: 'Guardar',
    a_search: 'Buscar',
    a_security: 'Seguridad',
    a_select_country: 'Seleccionar País',
    a_select_roles: 'Seleccionar Roles',
    a_select: 'Seleccionar',
    a_sign_up: '¡Registrate!',
    a_tax_condition: 'Condiciones Fiscales',
    a_type: 'Tipo',
    a_types: 'Tipos',
    a_used_sign_in: 'Es utilizado para ingresar',
    a_valid_from: 'Valido desde',
    a_valid_to: 'Valido hasta',
    a_verification_account: 'Verificación de cuenta',
    a_view_more: 'Ver más',
    a_yes: 'yes',
    a_your_address: 'Tú dirección',
    a_your_email: 'Tu correo electrónico',
    a_your_password: 'Tu contraseña',
};

const auth: I18nLocales = {
    au_forgot_password: '¿Olvidaste tu contraseña?',
};

const appValidations: I18nLocales = {
    av_one_item: 'Debe contener al menos un elemento',
    av_password_match: 'Las contraseñas deben coincidir',
    av_required: 'Requerido',
    av_too_long: 'Demasiado Largo!',
    av_too_short: 'Demasiado Corto!',
};

const entities: I18nLocales = {
    User: 'Usuario',
};

const errors: I18nLocales = {
    'app.domain.exceptions.uniqueAttribute': 'Ya existe un registro con el mismo valor de `{field}`.',
    'app.presentation.exceptions.duplicateEntity': 'Ya existe un registro con {field} {value}.',
    'auth.domain.exceptions.badCredentials': 'Correo electrónico o contraseña incorrectos.',
    'err_404': 'La página solicitada no existe',
    'err_login_description': 'No se pudo iniciar sesión. Verifique su correo electrónico y contraseña o vuelva a intentar mas tarde.',
    'err_login': 'Error al iniciar sesión',
    'err_save_role': 'Error al guardar el rol',
    'err_save_user': 'Error al guardar el usuario',
    'err_save': 'Error al guardar',
    'err_server': 'Error del servidor',
    'err_view': 'Error al cargar la vista',
    'err': 'Error',
    'Forbidden': 'Acceso denegado',
    'HTTP_BAD_REQUEST': 'Error en la petición',
    'HTTP_FORBIDDEN': 'Acceso denegado',
    'HTTP_UNPROCESSABLE_ENTITY': 'El registro no cumple con las reglas de validación.',
    'shared.exceptions.notFound': 'No se encuentra el recurso `{entity}`.',
    'Unprocessable Entity': 'Error al procesar los datos',
    'user.domain.exceptions.unverifiedUser': 'El usuario no ha sido verificado.',
};

const properties: I18nLocales = {
    address: 'Dirección',
    balance: 'Balance',
    birthday: 'Fecha de nacimiento',
    business_name: 'Nombre del negocio',
    calculation_value: 'Valor de cálculo',
    color: 'Color',
    company: 'Compañía',
    confirm_password: 'Confirmar Contraseña',
    contact_data: 'Datos de contacto',
    contact: 'CONTACTO',
    country: 'País',
    default_list: 'Lista por defecto',
    defaultList: 'Lista por defecto',
    description: 'Descipción',
    disabled: 'Deshabilitado',
    document_number: 'Número de documento',
    documentType: 'Tipo de documento',
    email: 'Correo electrónico',
    enable: 'Habilitado',
    enabled: 'Habilitado',
    fantasy_name: 'Nombre de fantasia',
    first_name: 'Nombre',
    fixedAmount: 'Monto fijo',
    gender: 'Género',
    id_number: 'Documento de identificación',
    identification_document: 'Documentos de identificación',
    last_name: 'Apellido',
    name: 'Nombre',
    new_password: 'Nueva Contraseña',
    number: 'numero',
    organization_code: 'Código de la Organización',
    organization: 'Organización',
    password: 'Contraseña',
    payment_method: 'Método de pago',
    paymentMethod: 'Método de pago',
    percentage: 'Porcentaje',
    permissions: 'Permisos',
    phone: 'Teléfono',
    roles: 'Roles',
    slug: 'Slug',
    string: 'cadena',
    tax_conditional: 'Condición fiscal',
    taxes: 'Impuestos',
    type_id: 'Tipo',
    type: 'Tipo',
    value: 'Valor',
};

const roles: I18nLocales = {
    r_assigned: 'Role/s asignados',
    r_create: 'Crear Rol',
    r_created: 'Rol Creado',
    r_list: 'Listado de Roles',
    r_no_roles: 'No Roles',
    r_remove: '¿Está seguro que desea eliminar este rol?',
    r_search: '{count, plural, one {Buscar rol} other {Buscar roles}}',
    r_update: 'Editar Rol',
    r_updated: 'Rol Actualizado',
};

const user: I18nLocales = {
    u_assigned: 'Usuario/s asignados',
    u_create: 'Crear Usuario',
    u_created: 'Usuario creado',
    u_list: 'Listado  de Usuarios',
    u_no_users: 'Sin usuarios',
    u_remove: '¿Está seguro que desea eliminar este usuario?',
    u_search: '{count, plural, one {Buscar usuario} other {Buscar usuarios}}',
    u_update: 'Editar Usuario',
    u_updated: 'Usuario actualizado',
    u_users: 'Usuarios',
    u_view: 'Ver Usuario',
};

const es: I18nLocales = {
    ...app,
    ...appValidations,
    ...auth,
    ...entities,
    ...errors,
    ...properties,
    ...roles,
    ...user,
};

export default es;
