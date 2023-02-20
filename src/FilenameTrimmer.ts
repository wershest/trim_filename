import * as fs from "fs/promises";
import path from "path";

export class FilenameTrimmer {
  constructor(private folder: string, private word: string) {}

  async start() {
    console.log(this.folder, this.word);
    const files = await this.getAllFiles(this.folder);

    for (const afile of files) {
      const pp = path.parse(afile);
      if (pp.name.startsWith(this.word)) {
        let newName = pp.name.substring(this.word.length);
        let newFilePath = path.join(pp.dir, newName + pp.ext);
        await fs.rename(afile, newFilePath);
        console.log(newFilePath);
      }
    }
  }

  async getAllFiles(folder: string) {
    const files: string[] = [];
    const r = await fs.readdir(folder);
    for (const item of r) {
      const filepath = path.join(folder, item);
      if ((await fs.lstat(filepath)).isDirectory()) {
        files.push(...(await this.getAllFiles(filepath)));
      } else {
        files.push(filepath);
      }
    }
    return files;
  }
}
