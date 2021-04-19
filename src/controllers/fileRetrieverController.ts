import HttpStatus from "http-status-codes";
import path from "path";
import { fileErrors } from "../utils/fileErrors";
import { logError } from "../utils/logError";

async function index(req, res) {
  let fileBaseName: string = req.params.file; //need to still sanitize this request.
  try {
    if (!fileBaseName.endsWith(".html")) {
      //Checks that the file extension ends with html.
      logError(fileErrors.WRONG_FILE_EXTENSION);
      res.status(HttpStatus.BAD_REQUEST).send(fileErrors.WRONG_FILE_EXTENSION);
    } else {
      // add function from model the retrieves the file based on the request params example: await retrieveFile(fileBaseName)
      let file = path.resolve(`./src/${fileBaseName}`);

      res.status(HttpStatus.OK).sendFile(file);
    }
  } catch (error) {
    //catch request server error
    logError(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export const fileRetrieverController = {
  index: index,
};
