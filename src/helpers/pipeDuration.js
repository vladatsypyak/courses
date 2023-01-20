export default function pipeDuration(minutes){
    let hours = Math.floor(minutes / 60)
    let min = minutes % 60
    if(String(min).length < 2 ){
        return `${hours}:0${min}`
    }
    return `${hours}:${min}`
}