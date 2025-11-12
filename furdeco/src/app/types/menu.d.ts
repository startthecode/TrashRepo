export interface LeftMenu{
    submenuDetails:LeftMenu[];
    id:number;
    name:string;
    nevigateUrl:string;
    navigateUrl?:string;
    displayArea:"Left" |"Right",
    iconClass:string
}