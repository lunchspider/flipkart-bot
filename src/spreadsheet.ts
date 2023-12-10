import Module from "node:module";
const require = Module.createRequire(import.meta.url);
import { GoogleAuth } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { google } from "googleapis";

const { spreadSheetId } = require('../config.json');

export const serviceAccountAuth = new GoogleAuth({
    keyFilename: './secrets.json',
    scopes: ["https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/gmail.readonly",
    ],
});

google.options({auth: serviceAccountAuth});

export const orderSpreadSheet = new GoogleSpreadsheet(spreadSheetId, serviceAccountAuth);
