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
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2249",
        "ok": "2249",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1553",
        "ok": "1553",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1599",
        "ok": "1599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1684",
        "ok": "1684",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1768",
        "ok": "1768",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 40,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90296,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.535",
        "ok": "20.535",
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
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2249",
        "ok": "2249",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1553",
        "ok": "1553",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1599",
        "ok": "1599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1684",
        "ok": "1684",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1768",
        "ok": "1768",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 40,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 90296,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "20.535",
        "ok": "20.535",
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
