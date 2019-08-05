import { environment } from '../environments/environment';

export class ApiEndpointConfig {

  public static Origin: string = environment.baseUrl;

  public static Paths = {
    user: {
      auth: `${ApiEndpointConfig.Origin}/memauth`,
      getMemberByActivationToken: `${ApiEndpointConfig.Origin}/library_members/get_member_by_activation_token`,
      activateAccount: `${ApiEndpointConfig.Origin}/library_members/activate_account`
    },
    search: {
      autocomplete: `${ApiEndpointConfig.Origin}/opac/autocomplete`,
      main: `${ApiEndpointConfig.Origin}/opac/search`,
      getFilters: `${ApiEndpointConfig.Origin}/opac/search/getFilters`
    }
  };
}
