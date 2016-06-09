var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90341",
        "ok": "90341",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3632",
        "ok": "3632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1663",
        "ok": "1663",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1712",
        "ok": "1712",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1824",
        "ok": "1824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1964",
        "ok": "1964",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90324,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.219",
        "ok": "19.219",
        "ko": "-"
    }
},
contents: {
"req_create-file-80c34": {
        type: "REQUEST",
        name: "Create File",
path: "Create File",
pathFormatted: "req_create-file-80c34",
stats: {
    "name": "Create File",
    "numberOfRequests": {
        "total": "90341",
        "ok": "90341",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3632",
        "ok": "3632",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1663",
        "ok": "1663",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1656",
        "ok": "1656",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1712",
        "ok": "1712",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1824",
        "ok": "1824",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1964",
        "ok": "1964",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90324,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "19.219",
        "ok": "19.219",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
