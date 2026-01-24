import type HttpClient from "../../../class/HttpClient.js";
import type { EditAcountArgs } from "../account.types.js";
import type { A2FData, EnableA2fArgs, RecoveryTokens } from "./a2f.types.js";

export default class A2fClient {
  constructor(private httpClient: HttpClient) {}

  enable({ password, code }: EnableA2fArgs) {
    return this.httpClient.request<RecoveryTokens, EnableA2fArgs>(
      "POST",
      "/client/account/two-factor",
      { password, code },
    );
  }

  disable({ password }: EditAcountArgs) {
    return this.httpClient.request<void, EditAcountArgs>(
      "POST",
      "/client/account/two-factor/disable",
      { password },
    );
  }

  getA2fQrCode(): Promise<A2FData> {
    return this.httpClient.request<A2FData>(
      "GET",
      "/client/account/two-factor",
    );
  }
}
