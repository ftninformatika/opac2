import { environment } from '../environments/environment';

export class ApiEndpointConfig {

  public static Origin: string = environment.baseUrl;

  public static Paths = {
    user: {
      auth: `${ApiEndpointConfig.Origin}/mematuh`,
      activateAccount: `${ApiEndpointConfig.Origin}/activate-account`
    }
  };
}
