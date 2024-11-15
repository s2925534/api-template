import { promises as fs } from 'fs';

async function readJsonFile<T>(filePath: string): Promise<T> {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data) as T;
    } catch (error) {
        console.error(`Error reading file at ${filePath}:`, error);
        throw new Error('Error reading the JSON file');
    }
}

export default readJsonFile;
