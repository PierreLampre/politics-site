console.log("linked");

const date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

function cleanEvents() {

    let htmlCollection = document.getElementsByClassName('date-and-time');

    let arrayOfLis = Array.from(htmlCollection);

    for (let i = 0; i < arrayOfLis.length; i++) {
        let event = arrayOfLis[i];
        let eventMonth = event.textContent.slice(0, 2);

        function wipeIt(event) {
            console.log(event);
            let dad = event.parentElement;
            let grandpa = dad.parentElement;
            grandpa.remove();
        }

        //remove events in a past month or day 

        if (eventMonth.slice(0, 1) == 0) {
            eventMonth = eventMonth.slice(1, 2);

            eventMonth = parseInt(eventMonth);
            month = parseInt(month);

            if (eventMonth < month) {
                wipeIt(event);
            } else if (eventMonth == month) {
                let eventDay = event.textContent.slice(3, 5);
                if (parseInt(eventDay.slice(0, 1)) == 0) {
                    eventDay = parseInt(event.textContent.slice(1, 2));
                    day = parseInt(day);
                    console.log(day)
                    if (eventDay < day) {
                        wipeIt(event);
                    }
                } else if (eventDay < day) {
                    wipeIt(event);
                }
            }
        }
    }
}

cleanEvents();


