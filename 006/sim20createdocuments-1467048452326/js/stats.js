var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90341",
        "ok": "90340",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "610",
        "ok": "610",
        "ko": "3526"
    },
    "maxResponseTime": {
        "total": "3526",
        "ok": "2323",
        "ko": "3526"
    },
    "meanResponseTime": {
        "total": "1211",
        "ok": "1211",
        "ko": "3526"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "64",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1212",
        "ok": "1212",
        "ko": "3526"
    },
    "percentiles2": {
        "total": "1253",
        "ok": "1253",
        "ko": "3526"
    },
    "percentiles3": {
        "total": "1314",
        "ok": "1314",
        "ko": "3526"
    },
    "percentiles4": {
        "total": "1362",
        "ok": "1362",
        "ko": "3526"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38289,
        "percentage": 42
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 52049,
        "percentage": 58
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.374",
        "ok": "26.374",
        "ko": "0"
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
        "ok": "90340",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "610",
        "ok": "610",
        "ko": "3526"
    },
    "maxResponseTime": {
        "total": "3526",
        "ok": "2323",
        "ko": "3526"
    },
    "meanResponseTime": {
        "total": "1211",
        "ok": "1211",
        "ko": "3526"
    },
    "standardDeviation": {
        "total": "64",
        "ok": "64",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1212",
        "ok": "1212",
        "ko": "3526"
    },
    "percentiles2": {
        "total": "1253",
        "ok": "1253",
        "ko": "3526"
    },
    "percentiles3": {
        "total": "1314",
        "ok": "1314",
        "ko": "3526"
    },
    "percentiles4": {
        "total": "1362",
        "ok": "1362",
        "ko": "3526"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38289,
        "percentage": 42
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 52049,
        "percentage": 58
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "26.374",
        "ok": "26.374",
        "ko": "0"
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
