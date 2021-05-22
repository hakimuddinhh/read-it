export const parseToHTML = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, "application/xml");
}