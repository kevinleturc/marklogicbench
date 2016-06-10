var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "58747",
        "ko": "41253"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "6",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "1137",
        "ok": "1137",
        "ko": "40"
    },
    "meanResponseTime": {
        "total": "20",
        "ok": "32",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "30",
        "ko": "1"
    },
    "percentiles1": {
        "total": "17",
        "ok": "30",
        "ko": "2"
    },
    "percentiles2": {
        "total": "32",
        "ok": "40",
        "ko": "3"
    },
    "percentiles3": {
        "total": "54",
        "ok": "60",
        "ko": "3"
    },
    "percentiles4": {
        "total": "70",
        "ok": "75",
        "ko": "7"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 58710,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 37,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 41253,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "508.37",
        "ok": "298.652",
        "ko": "209.718"
    }
},
contents: {
"req_commit-fffca": {
        type: "REQUEST",
        name: "commit",
path: "commit",
pathFormatted: "req_commit-fffca",
stats: {
    "name": "commit",
    "numberOfRequests": {
        "total": "100000",
        "ok": "58747",
        "ko": "41253"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "6",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "1137",
        "ok": "1137",
        "ko": "40"
    },
    "meanResponseTime": {
        "total": "20",
        "ok": "32",
        "ko": "2"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "30",
        "ko": "1"
    },
    "percentiles1": {
        "total": "17",
        "ok": "30",
        "ko": "2"
    },
    "percentiles2": {
        "total": "32",
        "ok": "40",
        "ko": "3"
    },
    "percentiles3": {
        "total": "54",
        "ok": "60",
        "ko": "3"
    },
    "percentiles4": {
        "total": "70",
        "ok": "75",
        "ko": "7"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 58710,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 37,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 41253,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "508.37",
        "ok": "298.652",
        "ko": "209.718"
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
