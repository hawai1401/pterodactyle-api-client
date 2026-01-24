import type HttpClient from "../../../class/HttpClient.js";
import type {
  Backup,
  BackupList,
  CreateBackupArgs,
  RestoreBackupArgs,
} from "./backup.types.js";

export default class BackupClient {
  constructor(private httpClient: HttpClient) {}

  async list(id: string) {
    const res = await this.httpClient.request<BackupList>(
      "GET",
      `/client/servers/${id}/backups`,
    );
    return {
      ...res,
      data: res.data.map((backup) => ({
        ...backup,
        attributes: {
          ...backup.attributes,
          created_at: new Date(backup.attributes.created_at),
          completed_at: backup.attributes.completed_at
            ? new Date(backup.attributes.completed_at)
            : null,
        },
      })),
    };
  }

  async info(id: string, backup: string) {
    const res = await this.httpClient.request<Backup<string>>(
      "GET",
      `/client/servers/${id}/backups/${backup}`,
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        completed_at: res.attributes.completed_at
          ? new Date(res.attributes.completed_at)
          : null,
      },
    };
  }

  async create(id: string, { ignored, is_locked, name }: CreateBackupArgs) {
    const res = await this.httpClient.request<Backup<string>, CreateBackupArgs>(
      "POST",
      `/client/servers/${id}/backups`,
      { ignored, is_locked, name },
    );
    return {
      ...res,
      attributes: {
        ...res.attributes,
        created_at: new Date(res.attributes.created_at),
        completed_at: res.attributes.completed_at
          ? new Date(res.attributes.completed_at)
          : null,
      },
    };
  }

  download(id: string, backup: string) {
    return this.httpClient.request<void>(
      "GET",
      `/client/servers/${id}/backups/${backup}/download`,
    );
  }

  delete(id: string, backup: string) {
    return this.httpClient.request<void>(
      "DELETE",
      `/client/servers/${id}/backups/${backup}`,
    );
  }

  restore(id: string, backup: string, { truncate }: RestoreBackupArgs = {}) {
    return this.httpClient.request<void, RestoreBackupArgs>(
      "POST",
      `/client/servers/${id}/backups/${backup}/restore`,
      { truncate },
    );
  }
}
