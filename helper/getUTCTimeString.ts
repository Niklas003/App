export const getUTCTimeString = (unixTime: string) => {
    if(unixTime){
    try{
    const dateTime = new Date(Number(unixTime)*1000)
    const hours = dateTime.getUTCHours()
    const minutes = dateTime.getUTCMinutes()
    return `${hours < 10 ? '0' : ''}${hours}${minutes < 10 ? '0' : ''}${minutes}Z`;
}catch{
    return ''
}
}else{
    return ''
}
}