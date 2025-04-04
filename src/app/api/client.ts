const BASE_URL = "https://api.hnpwa.com/v0";

interface APIClient {
  req<T>(path: string, init: RequestInit): Promise<T>;
}

class HackerNewsAPIClient implements APIClient {
  static #instance: HackerNewsAPIClient | null = null;

  private constructor(private baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  static create(baseUrl: string) {
    if (this.#instance) return this.#instance;

    this.#instance = new HackerNewsAPIClient(baseUrl);

    return this.#instance;
  }

  req<T>(path: string, init?: RequestInit): Promise<T> {
    return fetch(`${this.baseUrl}/${path}`, init).then((res) => res.json());
  }
}

const hnApiClient = HackerNewsAPIClient.create(BASE_URL);

export { hnApiClient };
