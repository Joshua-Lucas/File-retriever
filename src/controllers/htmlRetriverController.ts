import HttpStatus from "http-status-codes";
import { fileErrors } from "../utils/fileErrors";
import { logError } from "../utils/logError";

export async function index(req, res) {
  let fileBaseName: string = req.params.file; //need to still sanitize this request.
  try {
    if (!fileBaseName.endsWith(".html")) {
      //Checks that the file extension ends with html.
      logError(fileErrors.WRONG_FILE_EXTENSION);
      res.status(HttpStatus.BAD_REQUEST).send(fileErrors.WRONG_FILE_EXTENSION);
    } else {
      //run function to get file and store in variable. retrieveFile(fileBaseName)
      //return file with res.sendStatus(HttpStatus.Ok)sendFile(file)
      console.log("will call a function from the model");
    }
  } catch (error) {
    //catch request server error
    logError(error);
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
