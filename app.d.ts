/// <reference types="node" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
  }
}
/// <reference types="bolt" />
declare namespace NodeJS {
  interface ProcessEnv {
    readonly SLACK_SIGNING_SECRET: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
  }
}

