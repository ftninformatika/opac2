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
      getShelf: `${ApiEndpointConfig.Origin}/library_members/get_shelf`,
      getLendingHistory: `${ApiEndpointConfig.Origin}/members/lending_history`,
      getActiveLendings: `${ApiEndpointConfig.Origin}/members/active_lendings`
    },
    admin: {
      createModifyCollection: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      deleteCollection: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      getCollections: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      addRecordToCollection: `${ApiEndpointConfig.Origin}/opac/book_collections/add_record`,
      getShowableCollections: `${ApiEndpointConfig.Origin}/opac/book_collections/showable_collections`,
      swapIndexes: `${ApiEndpointConfig.Origin}/opac/book_collections/swap_indexes`
    },
    search: {
      main: `${ApiEndpointConfig.Origin}/opac/search`,
      autocomplete: `${ApiEndpointConfig.Origin}/opac/autocomplete`,
      getFilters: `${ApiEndpointConfig.Origin}/opac/search/get_filters`
    },
    book: {
      main: `${ApiEndpointConfig.Origin}/book`,
      getMultiple: `${ApiEndpointConfig.Origin}/book/multiple`,
      getByCollectionId: `${ApiEndpointConfig.Origin}/book/collection`,
      rateRecord: `${ApiEndpointConfig.Origin}/records/rate_record`
    },
    bookCommon: {
      main: `${ApiEndpointConfig.Origin}/book_common`
    },
    bookCover: {
      main: `${ApiEndpointConfig.Origin}/book_cover`,
      upload: `${ApiEndpointConfig.Origin}/book_cover/upload`
    }
  };
}
