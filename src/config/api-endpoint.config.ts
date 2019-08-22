import { environment } from '../environments/environment';

export class ApiEndpointConfig {

  public static Origin: string = environment.baseUrl;

  public static Paths = {
    user: {
      auth: `${ApiEndpointConfig.Origin}/memauth`,
      getMemberByActivationToken: `${ApiEndpointConfig.Origin}/library_members/get_member_by_activation_token`,
      activateAccount: `${ApiEndpointConfig.Origin}/library_members/activate_account`,
      addToShelf: `${ApiEndpointConfig.Origin}/library_members/add_to_shelf`,
      getShelf: `${ApiEndpointConfig.Origin}/library_members/get_shelf`
    },
    search: {
      main: `${ApiEndpointConfig.Origin}/opac/search`,
      autocomplete: `${ApiEndpointConfig.Origin}/opac/autocomplete`,
      getFilters: `${ApiEndpointConfig.Origin}/opac/search/getFilters`
    },
    book: {
      main: `${ApiEndpointConfig.Origin}/book`,
    }
  };
}
