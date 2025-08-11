export const getUTCTimeString = (unixTime: string) => {
    if(unixTime){
    try{
    const dateTime = new Date(Number(unixTime)*1000)
    const hours = dateTime.getUTCHours()
    const minutes = dateTime.getUTCMinutes()
    return `${hours}${minutes}Z`;
}catch{
    return ''
}
}else{
    return ''
}
}