import { Request, Response, NextFunction } from "express";
import { dispatchController } from '../controller/dispatchController';


export class Routes {
    private dispatch: dispatchController = new dispatchController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/dispatch').post(this.dispatch.GpCreate);
     }

}