    const {google} = require('googleapis');
    const path = require('path');
    const fs = require('fs');


    const client_id = '117561243213-bc73592vmjku010m3ttis2l8cr2sokk1.apps.googleusercontent.com'
    const client_secret = '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'
    const redirect_uri = 'https://developers.google.com/oauthplayground'

    const refresh_token = '1//04nip9Xhgcl7UCgYIARAAGAQSNwF-L9Ir6zdzNJLWKuZJqYq-YowajYp0eDJ604GfXyRAaBnu5G2NiTgr0qc16cTk8YrGpAU2yKc';

    const rootFile = '1qDvj3GngaSfi1duyvLo8MyAi9ZNzVKIN';

    const oauth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uri[0]);
  

    oauth2Client.setCredentials({refresh_token: refresh_token})

    const drive = google.drive({
      version: 'v3',
      auth: oauth2Client
    })


    const filePath = path.join(__dirname, 'CAR Manager-IS 230 -Spring 2020 -21 - Jawad Latest.xlsx');


    var fileMetadata = {
        'name': 'report',
        parents: [rootFile],
        // mimeType: 'csv/xlsx/xls',
        // resource:  fileMetaData,
        // fields: 'id',
      };
      var media = {
        mimType: 'csv/xlsx/xls',
        body: fs.createReadStream(filePath),
      }


     async function uploadFile(){
      try {
        const response = await drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        })
        console.log(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    
    uploadFile();
    