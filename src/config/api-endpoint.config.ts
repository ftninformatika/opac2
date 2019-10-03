import { environment } from '../environments/environment';

export class ApiEndpointConfig {

  public static Origin: string = environment.baseUrl;

  public static Paths = {
    user: {
      auth: `${ApiEndpointConfig.Origin}/memauth`,
      getMemberByActivationToken: `${ApiEndpointConfig.Origin}/library_members/get_member_by_activation_token`,
      activateAccount: `${ApiEndpointConfig.Origin}/library_members/activate_account`,
      changePassword: `${ApiEndpointConfig.Origin}/library_members/change_password`,
      forgotPassword: `${ApiEndpointConfig.Origin}/library_members/forgot_password`,
      addToShelf: `${ApiEndpointConfig.Origin}/library_members/add_to_shelf`,
      removeFromShelf: `${ApiEndpointConfig.Origin}/library_members/remove_from_shelf`,
      getShelf: `${ApiEndpointConfig.Origin}/library_members/get_shelf`
    },
    admin: {
      createModifyCollection: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      getCollections: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      addRecordToCollection: `${ApiEndpointConfig.Origin}/opac/book_collections/add_record`,
    },
    search: {
      main: `${ApiEndpointConfig.Origin}/opac/search`,
      autocomplete: `${ApiEndpointConfig.Origin}/opac/autocomplete`,
      getFilters: `${ApiEndpointConfig.Origin}/opac/search/get_filters`
    },
    book: {
      main: `${ApiEndpointConfig.Origin}/book`,
      getMultiple: `${ApiEndpointConfig.Origin}/book/multiple`,
    }
  };
}
