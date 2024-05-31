import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.75:9091',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const HOTEL_SERVICE = '/hotel-service/api/v1/';

export const getAllLicense = (): Promise<any> => {
  return instance.get<any>(HOTEL_SERVICE + 'license').then(({ data }) => data);
};
