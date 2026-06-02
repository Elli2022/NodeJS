import sanitizeHtml from "sanitize-html";
import * as crypto from "crypto";
import config from "../../config";
import makeInputObjFactory from "./make-input-object";

const errorMsgs = config.ERROR_MSG.post;

const md5 = (text: string) =>
  crypto.createHash("md5").update(text, "utf8").digest("hex");

const sanitize = (value: string) =>
  sanitizeHtml(value, { allowedTags: [], allowedAttributes: {} });

const makeInputObj = ({ params }) =>
  makeInputObjFactory({ md5, sanitize }).inputObj({ params, errorMsgs });

export { makeInputObj };
