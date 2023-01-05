import fsp from 'fs/promises';

export const touch = (filepath) => fsp.access(filepath)
.catch(() => fsp.writeFile(filepath, ''));