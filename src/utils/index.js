/**
 *
 * @param {string} url
 * @param {object} options
 * @returns {Promise<*>}
 */
export async function loadJson(url, options = {}) {
    const response = await fetch(url, options);
    return response.json();
}

export function createImage(url, backupSrc) {
    const img = new Image();
    img.src = url;
    img.onerror = () => {
        img.src = backupSrc;
    };
    return img;
}