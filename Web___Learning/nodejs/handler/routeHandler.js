import { addNewSighting } from '../utils/addNewSighting.js';
import { getData } from '../utils/getData.js'
import { parseJSONBody } from '../utils/parseJSONBody.js';
import { sendResponse } from '../utils/sendResponse.js';
import { sanitizeData } from '../utils/sanitizeData.js';

export async function handleGet(res) {
    const data = await getData();
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    try {
        const data = await parseJSONBody(req);
        const sanitizeBody = sanitizeData(data)
        await addNewSighting(sanitizeBody);
        sendResponse(res, 200, 'application/json', JSON.stringify(data));
    } catch (error) {
        console.log(error);
        sendResponse(res, 500, 'application/json', { error: 'Something went wrong' });
    }
}