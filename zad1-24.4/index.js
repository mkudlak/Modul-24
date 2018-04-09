const formatDate = (timeInSeconds = "0s") => {
    if (timeInSeconds === "0s") {
        return "0s"
    }

    let time = new Date(timeInSeconds * 1000)
    if (timeInSeconds < 60) {
        return `${time.getSeconds()}s`;
    }

    if (timeInSeconds >= 60 && timeInSeconds < (3600)) {
        if (time.getSeconds() != 0) {
            return `${time.getMinutes()}m ${time.getSeconds()}s`;
        } else {
            return `${time.getMinutes()}m`;
        }
    }

    if (timeInSeconds >= (3600)) {
        if ((time.getMinutes()) === 0 && time.getSeconds() === 0) {
            return `${time.getHours()-1}h`;
        } else if (time.getSeconds() === 0) {
            return `${time.getHours()-1}h ${time.getMinutes()}m`;
        } else if (time.getMinutes() === 0) {
            return `${time.getHours()-1}h ${time.getSeconds()}s`;
        } else {
            return `${time.getHours()-1}h ${time.getMinutes()}m ${time.getSeconds()}s`;
        }
    }
}

module.exports = formatDate;