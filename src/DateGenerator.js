class DateGenerator {

    static getTodaysDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;

        return `${day}/${month}/${year}`
    }
}


//console.log(DateGenerator.getTodaysDate())
module.exports = DateGenerator