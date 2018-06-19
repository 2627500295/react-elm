import path from 'path';
import fs from 'fs';

export const appDirectory = fs.realpathSync(process.cwd());

export const resolve = (dir) => {
  if (dir === void 0 || dir === null) {
    dir = '';
  }

  return path.resolve(appDirectory, dir);
};

export const resolveOwn = (dir) => {
  if (dir === void 0 || dir === null) {
    dir = '';
  }
  return path.resolve(__dirname, '..', dir);
};
