import { ClientConfig, createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig: ClientConfig = {
  projectId: '62cwhy3o',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-05-21',
  token: "sklOOoX42oz8IXaF2pcBb4ju1GaZQ6RTjH5LzhGQhDJi5pRwy5whs2459xNUo7ap0eq1hVnCcd6g2k04oLwGChBYsR5YGF7frKYhdNGX7eJ8h7AmgFXvJgbciF11myuMbXkRIg9vhgmI24l6mEVV3Z9uJgTS0HP8SBD6uqnbKWr7K26zsCOG",
};
const builder = imageUrlBuilder(clientConfig);

export const client = createClient(clientConfig);
export const urlFor = (source) => builder.image(source);
