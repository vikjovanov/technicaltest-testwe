const getIdFromUrl = (url) => {
    if (!url) return null;
    const trimmedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
    const urlElems = trimmedUrl.split("/");
    return urlElems[urlElems.length - 1];
};

export default getIdFromUrl;
