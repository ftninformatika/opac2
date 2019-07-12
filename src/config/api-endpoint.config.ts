import { environment } from '../environments/environment';

export class ApiEndpointConfig {

  public static Origin: string = environment.baseUrl;

  public static Paths = {
    user: {
      auth: `${ApiEndpointConfig.Origin}/mematuh`,
      getMemberByActivationToken: `${ApiEndpointConfig.Origin}/library_members/get_member_by_activation_token`,
      activateAccount: `${ApiEndpointConfig.Origin}/activate-account`
    }
  };
}
