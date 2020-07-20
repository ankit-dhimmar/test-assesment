import React from 'react';
import settings from '../config/settings';

export const getAstroidInfo = (astroidId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${settings.apiUrl}${settings.endpoints.info(astroidId)}?api_key=${
          settings.apiKey
        }`,
        {method: 'GET'},
      );
      const responseJson = await response.json();
      console.log(responseJson);
      resolve(responseJson);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getRandomAstroidId = () =>
  new Promise(async (resolve, reject) => {
    try {
      // ?api_key=DEMO_KEY
      const url = `${settings.apiUrl}${settings.endpoints.random}?api_key=${settings.apiKey}`;
      console.log(url);
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      resolve(responseJson);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
