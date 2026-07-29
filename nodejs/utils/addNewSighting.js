
import path from 'node:path';
import fs from 'node:fs/promises';
import { getData } from './getData.js';

export async function addNewSighting(newSighing) {
    try {
        const sighting = await getData()
        sighting.push(newSighing)

        const jsonPath = path.join('data', 'data.json')
        await fs.writeFile(jsonPath, JSON.stringify(sighting, null, 2), 'utf8');

    } catch (error) {
        console.log(error)
    }
}