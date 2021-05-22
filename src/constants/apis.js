const base = 'https://www.reddit.com/';
const baseV1 = 'https://www.reddit.com/api/v1/';
const baseAuth =  'https://oauth.reddit.com/'
const baseAuthV1 = 'https://oauth.reddit.com/api/v1/';

export const profileURL =  baseAuthV1 + 'me';
export const bestListingsURL =  baseAuth + 'best';
export const accessTokenURL =  baseV1 + 'access_token';


export const bestListingGuestURL = base + 'best.json';