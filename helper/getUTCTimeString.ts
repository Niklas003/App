export const getUTCTimeString = (unixTime: number) => {
    if(unixTime){
    const dateTime = new Date(unixTime*1000)
    const hours = dateTime.getUTCHours()
    const minutes = dateTime.getUTCMinutes()
    return `${hours}${minutes}Z`;
}else{
    return ''
}
}