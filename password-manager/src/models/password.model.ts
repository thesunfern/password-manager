export class Password {
    ID?: number;
    Password: string;
    Name: string;
    URL?: string;
    Description?: string;
    UserId: string;

    constructor(
        ID: number = null,
        Password: string,
        Name: string,
        URL: string = null,
        Description: string = null,
        UserId: string
    ) {
        this.ID = ID;
        this.Password = Password;
        this.Name = Name;
        this.URL = URL;
        this.Description = Description;
        this.UserId = UserId;
    }
}
