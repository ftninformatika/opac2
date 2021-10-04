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
      prolongLending: `${ApiEndpointConfig.Origin}/library_members/prolong_lending`,
      addToShelf: `${ApiEndpointConfig.Origin}/library_members/add_to_shelf`,
      removeFromShelf: `${ApiEndpointConfig.Origin}/library_members/remove_from_shelf`,
      getShelf: `${ApiEndpointConfig.Origin}/library_members/get_shelf`,
      getLendingHistory: `${ApiEndpointConfig.Origin}/members/lending_history`,
      getActiveLendings: `${ApiEndpointConfig.Origin}/members/active_lendings`,
      reserveBook: `${ApiEndpointConfig.Origin}/reservations/reserve`,
      getActiveReservations: `${ApiEndpointConfig.Origin}/reservations/active-reservations`,
      deleteReservation: `${ApiEndpointConfig.Origin}/reservations/delete`,
    },
    admin: {
      createModifyCollection: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      deleteCollection: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      getCollections: `${ApiEndpointConfig.Origin}/opac/book_collections`,
      addRecordToCollection: `${ApiEndpointConfig.Origin}/opac/book_collections/add_record`,
      getShowableCollections: `${ApiEndpointConfig.Origin}/opac/book_collections/showable_collections`,
      swapIndexes: `${ApiEndpointConfig.Origin}/opac/book_collections/swap_indexes`,
      getEvents: `${ApiEndpointConfig.Origin}/events`,
      createEvent: `${ApiEndpointConfig.Origin}/events/add`,
      downloadImage: `${ApiEndpointConfig.Origin}/events/image`,
      faq: `${ApiEndpointConfig.Origin}/faq`,
      messages: `${ApiEndpointConfig.Origin}/messages`,
      addMessage: `${ApiEndpointConfig.Origin}/messages/add`,
      getSenders: `${ApiEndpointConfig.Origin}/messages/all-senders`,
      notifications: `${ApiEndpointConfig.Origin}/notifications`,
      library: `${ApiEndpointConfig.Origin}/libraries`
    },
    search: {
      main: `${ApiEndpointConfig.Origin}/opac/search`,
      byIds: `${ApiEndpointConfig.Origin}/opac/search/by_ids`,
      autocomplete: `${ApiEndpointConfig.Origin}/opac/autocomplete`,
      getFilters: `${ApiEndpointConfig.Origin}/opac/search/get_filters`
    },
    book: {
      main: `${ApiEndpointConfig.Origin}/book`,
      getMultiple: `${ApiEndpointConfig.Origin}/book/multiple`,
      getByCollectionId: `${ApiEndpointConfig.Origin}/book/collection`,
      rateRecord: `${ApiEndpointConfig.Origin}/records/rate_record`,
    },
    bookCommon: {
      main: `${ApiEndpointConfig.Origin}/book_common`
    },
    bookCover: {
      main: `${ApiEndpointConfig.Origin}/book_cover`,
      upload: `${ApiEndpointConfig.Origin}/book_cover/upload`
    },
    coders: {
      subLocations: `${ApiEndpointConfig.Origin}/coders/sublocation`
    },
    config: {
      getAll: `${ApiEndpointConfig.Origin}/library_configuration/allConfigsBrief`,
    }
  };
}
