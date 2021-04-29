import { Request, Response } from 'express';
import {dispatchDao} from '../dao/dispatchDao';
import { CustomLogger } from '../config/Logger'
let dispatch = new dispatchDao();

export class dispatchService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into dispatchService.ts: GpCreate')
     const  dispatchData = req.body;
     dispatch.GpCreate(dispatchData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from dispatchService.ts: GpCreate')
         callback(response);
         });
    }


}