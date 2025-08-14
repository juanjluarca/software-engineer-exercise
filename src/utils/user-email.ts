export default class UserEmail {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(email: string) {
        if (!email.includes("@")) {
            throw new Error("Invalid email format");
        }
    }

}

