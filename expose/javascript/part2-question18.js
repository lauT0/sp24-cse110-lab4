function getTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

setInterval(getTime, 1000);