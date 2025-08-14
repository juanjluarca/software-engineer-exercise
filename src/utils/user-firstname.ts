export default class UserFirstname {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }


    private isValid(firstname: string): void {
        if (firstname.length < 2) {
            throw new Error("Firstname must be at least 2 characters")
        }
    }
}

