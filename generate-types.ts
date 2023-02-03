import { TypeScriptFileGenerator } from "@asyncapi/modelina";
import fs from "fs";
import path from "path";

/**
 * THIS LITTLE SCRIPT SHOULD BE ABLE TO GENERATE TS MODELS FROM MOST THINGS WE THROW AT IT
 * asyncapi.yaml, openapi.yaml, promotion-created.json etc
 * IT SHOULD ALSO RESOLVE RELATIVE REFS
 */

process.chdir(path.resolve(__dirname, "./models"));

const generator = new TypeScriptFileGenerator({
  modelType: "interface",
  enumType: "union",
});

(async () => {
  // CHANGE THIS FILE LOCATION TO ASYNCAPI OR OPENAPI OR ANY JSON SCHEMA YOU WANT :D
  const file = fs.readFileSync(
    path.resolve(__dirname, "./models/models.json"),
    "utf8"
  );
  await generator.generateToFiles(
    JSON.parse(file),
    path.resolve(__dirname, "./output-models")
  );
})();
