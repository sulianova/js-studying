import fs from 'fs';

 class FileInfo {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileStat = fs.statSync(filePath);
  }

  getSize() {
    return this.fileStat.size;
  }
}

class SmartFileInfo extends FileInfo {
  getSize(unit = 'b') {
    const size = super.getSize();
    switch (unit) {
      case 'b':
        return size;
      case 'kb':
        return size / 1024;
      default:
        throw new Error(`Unknown unit name: ${unit}`);
    }
  }
}

export default SmartFileInfo;