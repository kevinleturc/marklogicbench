var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25047",
        "ok": "25047",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4315",
        "ok": "4315",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "percentiles1": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles3": {
        "total": "181",
        "ok": "181",
        "ko": "-"
    },
    "percentiles4": {
        "total": "541",
        "ok": "541",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24837,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 59,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 151,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "623.805",
        "ok": "623.805",
        "ko": "-"
    }
},
contents: {
"req_search-06a94": {
        type: "REQUEST",
        name: "search",
path: "search",
pathFormatted: "req_search-06a94",
stats: {
    "name": "search",
    "numberOfRequests": {
        "total": "18750",
        "ok": "18750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4315",
        "ok": "4315",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "163",
        "ok": "163",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "percentiles1": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles2": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "percentiles3": {
        "total": "181",
        "ok": "181",
        "ko": "-"
    },
    "percentiles4": {
        "total": "436",
        "ok": "437",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18610,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 49,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 91,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "466.975",
        "ok": "466.975",
        "ko": "-"
    }
}
    },"req_commit-fffca": {
        type: "REQUEST",
        name: "commit",
path: "commit",
pathFormatted: "req_commit-fffca",
stats: {
    "name": "commit",
    "numberOfRequests": {
        "total": "6297",
        "ok": "6297",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "68",
        "ok": "68",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3953",
        "ok": "3953",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "percentiles1": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles3": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1026",
        "ok": "1026",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6227,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 60,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "156.829",
        "ok": "156.829",
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
