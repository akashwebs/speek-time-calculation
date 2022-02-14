function calculation() {
    const hours = document.getElementById('hours');
    const miniutes = document.getElementById('miniutes');
    const seconds = document.getElementById('seconds');


    // main hours
    let hourToMiniute = eval(hours.value) * 60;
    if (isNaN(hourToMiniute)) {
        hourToMiniute = 0;
    }
    // main minute
    let miniutesValue = eval(miniutes.value);
    if (isNaN(miniutesValue)) {
        miniutesValue = 0;
    }

    let secondsValue = eval(seconds.value);
    if (isNaN(secondsValue)) {
        secondsValue = 0;
    }
    let secondRoundMinutes = 0;
    let extraSecond = 0;
    if (secondsValue > 60) {
        secondRoundMinutes = parseInt(secondsValue / 60);
        extraSecond = secondsValue - (secondRoundMinutes * 60);
    } else {
        extraSecond = secondsValue;
    }
    // seccond er aage

    // main second

    let totalMinutes = hourToMiniute + miniutesValue + secondRoundMinutes;
    let mainHour = 0;
    let mainMinute = 0;
    if (totalMinutes > 60) {

        mainHour = parseInt(totalMinutes / 60)
        mainMinute = totalMinutes - (mainHour * 60)
    } else {
        mainMinute = totalMinutes;
    }


    const display = document.getElementById('displayTotal');
    display.innerText = mainHour + 'h' + mainMinute + 'm' + extraSecond + 's';
}