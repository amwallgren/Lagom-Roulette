import hashPassword from "./hashPassword.js"

export default class userClass{
    constructor(username, password){
        this.username = username;
        this.uuid = self.crypto.randomUUID();
        this.password = hashPassword(password, this);
    }
}