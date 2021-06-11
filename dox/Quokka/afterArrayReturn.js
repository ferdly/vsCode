let timeZoneObject = {
    "timezone": {
        "name:": "Central Time",
        "abbrv": "ET",
        "afterArray":[
            ["2015-03-08T02:00:00","daylight"],["2015-11-01T02:00:00","standard"],
            ["2016-03-13T02:00:00","daylight"],["2016-11-06T02:00:00","standard"],
            ["2017-03-12T02:00:00","daylight"],["2017-11-05T02:00:00","standard"],
            ["2018-03-11T02:00:00","daylight"],["2018-11-04T02:00:00","standard"],
            ["2019-03-10T02:00:00","daylight"],["2019-11-03T02:00:00","standard"],
            ["2020-03-08T02:00:00","daylight"],["2020-11-01T02:00:00","standard"],
            ["2021-03-14T02:00:00","daylight"],["2021-11-07T02:00:00","standard"],
            ["2022-03-13T02:00:00","daylight"],["2022-11-06T02:00:00","standard"],
            ["2023-03-12T02:00:00","daylight"],["2023-11-05T02:00:00","standard"],
            ["2024-03-10T02:00:00","daylight"],["2024-11-03T02:00:00","standard"],
            ["2025-03-09T02:00:00","daylight"],["2025-11-02T02:00:00","standard"],
            ["2026-03-08T02:00:00","daylight"],["2026-11-01T02:00:00","standard"],
            ["2027-03-14T02:00:00","daylight"],["2027-11-07T02:00:00","standard"],
            ["2028-03-12T02:00:00","daylight"],["2028-11-05T02:00:00","standard"],
            ["2029-03-11T02:00:00","daylight"],["2029-11-04T02:00:00","standard"]
            ],
        "standard": {
            "name": "Centrl Standard Time",
            "abbrv": "EST",
            "offest": -6
        },
        "daylight": {
            "name": "Centrl Daylight Time",
            "abbrv": "EDT",
            "offest": -5
        }
    }
};

let afterArray = [
    ["2015-03-08T02:00:00","daylight"],["2015-11-01T02:00:00","standard"],
    ["2016-03-13T02:00:00","daylight"],["2016-11-06T02:00:00","standard"],
    ["2017-03-12T02:00:00","daylight"],["2017-11-05T02:00:00","standard"],
    ["2018-03-11T02:00:00","daylight"],["2018-11-04T02:00:00","standard"],
    ["2019-03-10T02:00:00","daylight"],["2019-11-03T02:00:00","standard"],
    ["2020-03-08T02:00:00","daylight"],["2020-11-01T02:00:00","standard"],
    ["2021-03-14T02:00:00","daylight"],["2021-11-07T02:00:00","standard"],
    ["2022-03-13T02:00:00","daylight"],["2022-11-06T02:00:00","standard"],
    ["2023-03-12T02:00:00","daylight"],["2023-11-05T02:00:00","standard"],
    ["2024-03-10T02:00:00","daylight"],["2024-11-03T02:00:00","standard"],
    ["2025-03-09T02:00:00","daylight"],["2025-11-02T02:00:00","standard"],
    ["2026-03-08T02:00:00","daylight"],["2026-11-01T02:00:00","standard"],
    ["2027-03-14T02:00:00","daylight"],["2027-11-07T02:00:00","standard"],
    ["2028-03-12T02:00:00","daylight"],["2028-11-05T02:00:00","standard"],
    ["2029-03-11T02:00:00","daylight"],["2029-11-04T02:00:00","standard"]
    ];
let dateParam = "12/23/2017";
currentTimeZoneState = getCurrentTimeZoneState(timeZoneObject,dateParam);
console.log(currentTimeZoneState);
// console.log(currentTimeZoneState);
// document.getElementById("demo").innerHTML = txt;
function getCurrentTimeZoneState (kittyKatObject, dateString = "") {
    let afterArrayParam = kittyKatObject.timezone.afterArray;
    console.log(afterArrayParam);
    let timestamp = Date.parse(dateString);
    console.log(timestamp)
    
    if (isNaN(timestamp) == false) {
      var dateParamFinal = new Date(timestamp);
    } else {
        var dateParamFinal = new Date();
    }
    console.log(dateParamFinal);
    const nowISO = dateParamFinal.toISOString();
    console.log(nowISO);
    for (let index = 0; index < afterArrayParam.length; index++) {
        let elementISO = afterArrayParam[index][0];
        let elementValue = afterArrayParam[index][1];
        if (nowISO < elementISO) {
            console.log(elementISO)
            // return elementValue;
            let last = index - 1;
            let key = afterArrayParam[last][1]
            console.log(key)
            return kittyKatObject.timezone[key];
        }
    }
}

