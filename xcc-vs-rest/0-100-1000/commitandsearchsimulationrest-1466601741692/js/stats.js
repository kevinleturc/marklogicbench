var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "27696",
        "ok": "27543",
        "ko": "153"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "4322"
    },
    "maxResponseTime": {
        "total": "64262",
        "ok": "55431",
        "ko": "64262"
    },
    "meanResponseTime": {
        "total": "1419",
        "ok": "1173",
        "ko": "45621"
    },
    "standardDeviation": {
        "total": "5239",
        "ok": "3815",
        "ko": "19594"
    },
    "percentiles1": {
        "total": "171",
        "ok": "170",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "230",
        "ok": "226",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "6423",
        "ok": "4947",
        "ko": "60109"
    },
    "percentiles4": {
        "total": "31057",
        "ok": "17441",
        "ko": "61038"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21505,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2253,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3785,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 153,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "401.846",
        "ok": "399.626",
        "ko": "2.22"
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
        "total": "27696",
        "ok": "27543",
        "ko": "153"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "4322"
    },
    "maxResponseTime": {
        "total": "64262",
        "ok": "55431",
        "ko": "64262"
    },
    "meanResponseTime": {
        "total": "1419",
        "ok": "1173",
        "ko": "45621"
    },
    "standardDeviation": {
        "total": "5239",
        "ok": "3815",
        "ko": "19594"
    },
    "percentiles1": {
        "total": "171",
        "ok": "170",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "230",
        "ok": "226",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "6423",
        "ok": "4947",
        "ko": "60109"
    },
    "percentiles4": {
        "total": "31057",
        "ok": "17441",
        "ko": "61038"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21505,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2253,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3785,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 153,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "401.846",
        "ok": "399.626",
        "ko": "2.22"
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
