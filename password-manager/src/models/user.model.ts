export class User {
    UserId: string;
    Username?: string;
    LoginPassword?: string;
    Email?: string;

    constructor(
        UserId: string,
        Username: string = null,
        LoginPassword: string = null,
        Email: string = null
    ) {
        this.UserId = UserId;
        this.Username = Username;
        this.LoginPassword = LoginPassword;
        this.Email = Email;
    }
}
