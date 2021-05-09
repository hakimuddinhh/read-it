const CLIENT_ID = '7fyJ3Nvygni9dQ';
export const REDIRECT_URI = `${window.location.origin}/feed`;
const scope = 'identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread'
export const loginURL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scope}&state=LOGIN_VIA_REDDIT`;
export default loginURL;