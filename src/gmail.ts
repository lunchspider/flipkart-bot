import { google } from 'googleapis';

async function auth() {
    const a = new google.auth.GoogleAuth({
        keyFile: './secrets.json', scopes: [
            "https://www.googleapis.com/auth/gmail.readonly",
        ],
        clientOptions: {
            subject: 'shaildatauser@gmail.com',
        }
    });
    return a;
}

export const gmail = google.gmail({ version: 'v1', auth: await auth() });
