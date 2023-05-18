import fs from 'fs';
import path from 'path';

export default class DatabaseConfigLoader {
  constructor(pathToConfigs) {
    this.pathToConfigs = pathToConfigs;
  }

  load(env) {
    const fileName = `database.${env}.json`;
    const filePath = path.join(this.pathToConfigs, fileName);
    const raw = fs.readFileSync(filePath);
    const rawConfig = JSON.parse(raw);

    if (!Object.hasOwn(rawConfig, 'extend')) {
      return rawConfig;
    }

    const { extend, ...config } = rawConfig;
    return { ...this.load(extend), ...config };
  }
}