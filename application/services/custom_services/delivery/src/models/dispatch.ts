
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const dispatchSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   item: String,
   material: String
})

const dispatchModel = mongoose.model('dispatch', dispatchSchema, 'dispatch');
export default dispatchModel;
