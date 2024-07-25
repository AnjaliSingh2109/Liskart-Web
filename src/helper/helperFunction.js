//Write your common helper function for overall project here...

/**
 * @author INT
 * @desc get exact date and time from ISO 8601 format.
 * @param {*} isoDateString
 * @returns : DD-MM-YYYY HH:MM:SS
 */
class DateFormatter {
    formatDate(isoDateString) {
        const date = new Date(isoDateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let formattedDate = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`;

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        formattedDate += ` ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        return formattedDate;
    }
}

// Usage example:
const dateFormatter = new DateFormatter();
console.log(dateFormatter.formatDate("2023-06-14T12:34:56Z"));
