import {Request, Response} from 'express';

async function getSample(req: Request, res: Response): Promise<Response> {
    try {
        return res.status(201).json({message: "Success in GET"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error in GET", error});
    }
}

async function postSample(req: Request, res: Response): Promise<Response> {
    try {
        return res.status(201).json({message: "Success in POST"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error in POST", error});
    }
}

export {getSample, postSample};
