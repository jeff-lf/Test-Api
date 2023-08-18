const fs = require('fs');
const CloudmersiveImageApiClient = require('cloudmersive-image-api-client');

const defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
const Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'ea3c4a27-6e82-48a9-90da-8e8d5dc591b5';

const apiInstance = new CloudmersiveImageApiClient.FaceApi();

const imagePath = 'images/image2.jpg'; // Caminho para a imagem que você deseja enviar

const imageFile = Buffer.from(fs.readFileSync(imagePath).buffer);

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' , JSON.stringify(data, null, 2));
    console.log(data.Successful)
  }
};

apiInstance.faceLocateWithLandmarks(imageFile, callback);
