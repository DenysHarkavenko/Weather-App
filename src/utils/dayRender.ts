export function getToday(dayOfWeek: number): string{
    let day: string = ''
    switch(dayOfWeek){
        case 1:
            day = 'Monday'
            break
        case 2:
            day = 'Tuesday'   
            break       
        case 3:
            day = 'Wednesday'
            break     
        case 4:
            day = 'Thursday'
            break    
        case 5:
            day = 'Friday'
            break     
        case 6:
            day = 'Saturday'
            break
        case 0:
            day = 'Sunday'
            break
        default:
            break
    }
    return day;
}