var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32058",
        "ok": "32058",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4245",
        "ok": "4245",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "24",
        "ok": "24",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26",
        "ok": "27",
        "ko": "-"
    },
    "percentiles3": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles4": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32016,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 35,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "800.849",
        "ok": "800.849",
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
        "total": "8004",
        "ok": "8004",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4245",
        "ok": "4245",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles1": {
        "total": "36",
        "ok": "36",
        "ko": "-"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles3": {
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "percentiles4": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7994,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "199.95",
        "ok": "199.95",
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
        "total": "24054",
        "ok": "24054",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4046",
        "ok": "4046",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles4": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24022,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 25,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "600.899",
        "ok": "600.899",
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
