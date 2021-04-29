import * as mongoose from 'mongoose';
import dispatchModel from '../models/dispatch';
import { CustomLogger } from '../config/Logger'


export class dispatchDao {
    private dispatch = dispatchModel;
    constructor() { }
public GpCreate(dispatchData, callback){
new CustomLogger().showLogger('info', 'Enter into dispatchDao.ts: GpCreate')
let temp = new dispatchModel(dispatchData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from dispatchDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}