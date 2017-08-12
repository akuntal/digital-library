import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'bookFilter'
})
export class BookFilterPipe implements PipeTransform{
    transform(values:any, args:any) {
        if(!values || !args) return values;

        return values.filter((val) => {
            return val.name.toLowerCase().indexOf(args.toLowerCase()) >= 0;
        })
    }
}