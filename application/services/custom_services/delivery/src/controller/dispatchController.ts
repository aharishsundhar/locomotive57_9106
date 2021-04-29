import { Request, Response } from 'express';
import { dispatchService } from '../service/dispatchService';
import { CustomLogger } from '../config/Logger'
let dispatch = new dispatchService();

export class dispatchController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
dispatch.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into dispatchController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from dispatchController.ts: GpCreate');
    })}


}