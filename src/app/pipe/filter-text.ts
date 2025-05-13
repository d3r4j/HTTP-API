import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interface/user";

@Pipe({
    name: 'filterpipe'
})
export class filterPipe implements PipeTransform {
    transform(user: User[], filtername: string) {
        if (user.length === 0 || filtername === '') {
            return user;
        }

        return user.filter((item) => {
            return item.name.toLowerCase().includes(filtername.toLocaleLowerCase()) ||
                item.username.toLowerCase().includes(filtername.toLocaleLowerCase()) ||
                item.email.toLowerCase().includes(filtername.toLocaleLowerCase())

        })

    }
}