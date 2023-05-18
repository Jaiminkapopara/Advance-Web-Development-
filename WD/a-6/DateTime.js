function getCurrentDateTime() {
    const date = new Date();
    const formatetedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formatetedTime = `${hours % 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    const dateTime = `${formatetedDate} ${formatetedTime}`;

    return dateTime;

}

function greeting(name) {
    return `hello ${name}, the time is: ${getCurrentDateTime()}`;

}
console.log(greeting('shivam'));

module.exports=greeting;
