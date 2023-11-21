
export interface AppConfig {
  version: string;
  profiles: {
    id: string;
    name: string;
    default: boolean;
    openai: {
      apiKey: string;
    };
  }[];
}