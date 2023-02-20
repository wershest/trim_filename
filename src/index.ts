import { program } from "commander";
import { FilenameTrimmer } from "./FilenameTrimmer";

function doIt() {
  program
    .name("trim_filename")
    .description(
      "Trim file name. Give it a string, trim it from head and tail of the file name."
    )
    .option("-f, --folder <string>", "Specify a folder")
    .option("-w, --word <string>", "String to trim");

  const options = program.parse().opts();

  const trimmer = new FilenameTrimmer(options.folder, options.word);
  trimmer.start();
}

doIt();
