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
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles2": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles4": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 90341,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "355.528",
        "ok": "355.528",
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
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "455",
        "ok": "455",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles2": {
        "total": "97",
        "ok": "98",
        "ko": "-"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles4": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 90341,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "355.528",
        "ok": "355.528",
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
