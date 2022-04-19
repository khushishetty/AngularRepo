import { MenuClass } from "./menu";
import { UserInfo } from "./userInfo";

export class Bill{
    userinfo=new UserInfo();
    // userId:string="";
    // userName:string="";
    // userPhno:string="";
    foodInfos:Array<MenuClass>=[];
    quantityList:Array<number>=[];
    total:number=0;

    constructor(){}

}