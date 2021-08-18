
export class UserClass {
    username?: string;  
    rounds?: number; 
    points?: number;
    time?: string;
    img?: string; 
    
    constructor(username, rounds, points, time, img){
        this.username = username;
        this.img = img;
        this.rounds = rounds; 
        this.points = points; 
        this.time = time; 
    }
}

export interface UserInterface{
    username?: string;  
    rounds?: number; 
    points?: number;
    time?: string;
    img?: string;   
}
