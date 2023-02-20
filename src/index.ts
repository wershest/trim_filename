import { program } from "commander";
import { FilenameTrimmer } from "./FilenameTrimmer";

function doIt() {
  program
    .name("trim_filename")
    .description("Delete a string at the beginning of the file name.")
    .option("-f, --folder <string>", "Specify a folder")
    .option("-w, --word <string>", "String to trim");

  const options = program.parse().opts();

  const trimmer = new FilenameTrimmer(options.folder, options.word);
  trimmer.start();
}

doIt();
