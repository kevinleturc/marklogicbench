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
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1910",
        "ok": "1910",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles2": {
        "total": "698",
        "ok": "697",
        "ko": "-"
    },
    "percentiles3": {
        "total": "773",
        "ok": "773",
        "ko": "-"
    },
    "percentiles4": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 87794,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2506,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 41,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "48.571",
        "ok": "48.571",
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
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1910",
        "ok": "1910",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles2": {
        "total": "697",
        "ok": "697",
        "ko": "-"
    },
    "percentiles3": {
        "total": "773",
        "ok": "773",
        "ko": "-"
    },
    "percentiles4": {
        "total": "856",
        "ok": "856",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 87794,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2506,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 41,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "48.571",
        "ok": "48.571",
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
