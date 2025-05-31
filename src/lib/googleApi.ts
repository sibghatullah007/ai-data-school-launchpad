// Google API configuration
declare const gapi: any;
declare const google: any;

const CLIENT_ID = '888703969923-bsavh979915drjrd3c5f3fcpqa5is6oa.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCAGcaE9STl4-NkxCG15f0ADJG9VbXYKlQ';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file';

const SPREADSHEET_ID = '1uJf4dCdIV50rqDggjtuqcZ3LHqXWwWhZi3lShK2AS0Q';
const DRIVE_FOLDER_ID = '1jIareQn0hOPJUbUgMASmlqT9gLd5cWVp';

let tokenClient: any;
let gapiInited = false;
let gisInited = false;

export function initializeGoogleApi() {
  return new Promise((resolve, reject) => {
    // Load the Google API client library
    const script1 = document.createElement('script');
    script1.src = 'https://apis.google.com/js/api.js';
    script1.onload = () => {
      gapi.load('client', async () => {
        try {
          await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
          });
          gapiInited = true;
          resolve(true);
        } catch (err) {
          reject(err);
        }
      });
    };
    document.body.appendChild(script1);

    // Load the Google Identity Services library
    const script2 = document.createElement('script');
    script2.src = 'https://accounts.google.com/gsi/client';
    script2.onload = () => {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
        prompt: 'consent',
        hint: '',
      });
      gisInited = true;
      resolve(true);
    };
    document.body.appendChild(script2);
  });
}

export async function getAuthToken() {
  return new Promise((resolve, reject) => {
    try {
      // Clear any existing tokens
      if (gapi.client.getToken()) {
        gapi.client.setToken(null);
      }

      tokenClient.callback = (resp: any) => {
        if (resp.error) {
          reject(resp);
          return;
        }
        resolve(resp);
      };

      if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({ prompt: 'consent' });
      } else {
        tokenClient.requestAccessToken({ prompt: '' });
      }
    } catch (err) {
      reject(err);
    }
  });
}

export async function uploadToDrive(file: File) {
  try {
    const metadata = {
      name: file.name,
      mimeType: file.type,
      parents: [DRIVE_FOLDER_ID],
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    const token = gapi.client.getToken();
    if (!token) {
      throw new Error('No access token available');
    }

    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
      body: form,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

export async function appendToSheet(data: any) {
  try {
    const values = [
      [
        data.name,
        data.email,
        data.whatsapp,
        data.course,
        data.paymentProofLink
      ]
    ];

    const response = await gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values,
      },
    });

    return response.result;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
} 