import { NetworkStateList } from '../common/state.types';
import { ApiService } from './ApiService';

let instance: UserService;

export class UserService {
  private status: NetworkStateList = NetworkStateList.Unchanged;

  private apiService: ApiService = ApiService.Instance();

  private constructor() {
    this.checkAuthState();
  }

  public static Instance() {
    if (instance !== void 0) return instance;

    instance = new UserService();

    return instance;
  }

  private async checkAuthState() {
    this.status = NetworkStateList.Loading;
    const result = await this.apiService.get('/auth');

    console.log(result);
  }
}
