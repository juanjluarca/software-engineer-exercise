export default class UserLastname {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }


    private isValid(lastname: string): void {
        if (lastname.length < 2) {
            throw new Error("Firstname must be at least 2 characters")
        }
    }
}

