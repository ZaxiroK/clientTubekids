/*import {HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UsersService }from "../services/users.service";
import 'rxjs/add/operator/do';
import {Injectable} from "@angular/core";
import{Router}from "@angular/router";


@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router){}

    

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{


            if(req.headers.get('No-Auth')== "True")
            return next.handle(req.clone());

            if(localStorage.getItem('userToken') != null){
                const clonedreq = req.clone({
                    headers: req.headers.set("Authorization", "Bearer" +localStorage.getItem('userToken'))
                });
                return next.handle(clonedreq)
                .do(
                    succ => {},
                    err => {
                        debugger;
                        if(err.status === 401)
                        this.router.navigateByUrl('/login');
                    }
                );
            } else  {
                //ventana que se abrira por primera vez
                this.router.navigateByUrl('/inicio');
            }


            
        }
        
        
       
    
}*/