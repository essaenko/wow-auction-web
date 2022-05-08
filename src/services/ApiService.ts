let instance: ApiService;

enum RequestMethodList {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

export class ApiService {
  private host = 'http://localhost:8080';

  private endpoint = '/api';

  private constructor() {
    console.log('ApiService instantiated');
  }

  public static Instance() {
    if (instance !== void 0) return instance;

    instance = new ApiService();

    return instance;
  }

  private request(method: RequestMethodList, path: string, body?: BodyInit) {
    return fetch(`${this.host}${this.endpoint}${path}`, {
      method,
      body: method === RequestMethodList.Post ? body : void 0,
    });
  }

  public get(path: string) {
    return this.request(RequestMethodList.Get, path);
  }
}
