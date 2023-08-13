import User from "../../../common/domain/components/user/User";
import UserServiceFactory from "~/domain/factories/UserServiceFactory";

export default class UserComponentFactory {
    private static user: User;

    static create(): User {
        if (!this.user) {
            this.user = new User(UserServiceFactory.create());
        }
        return this.user;
    }
}