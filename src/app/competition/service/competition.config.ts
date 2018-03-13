import { InjectionToken } from '@angular/core';

export interface DBConfig {
  url: string;
  port: string;
}

export const COMP_DB_CONFIG: DBConfig = {
  url: 'http://somewhere.io/api',
  port: '5000'
};

export const DB_CONFIG = new InjectionToken<DBConfig>('competition.config');

// Providers
export const DBConfigProvider = {
  provide: DB_CONFIG,
  useValue: COMP_DB_CONFIG
};// AppConfig 타입의 InjectionToken
