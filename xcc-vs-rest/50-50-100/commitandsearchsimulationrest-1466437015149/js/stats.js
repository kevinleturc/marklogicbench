var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "28942",
        "ok": "28942",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4050",
        "ok": "4050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "percentiles1": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "percentiles4": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28771,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 149,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "721.206",
        "ok": "721.206",
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
        "total": "14565",
        "ok": "14565",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4043",
        "ok": "4043",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "percentiles1": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "142",
        "ok": "142",
        "ko": "-"
    },
    "percentiles3": {
        "total": "172",
        "ok": "173",
        "ko": "-"
    },
    "percentiles4": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14500,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 55,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "362.945",
        "ok": "362.945",
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
        "total": "14377",
        "ok": "14377",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4050",
        "ok": "4050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "percentiles1": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles2": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles3": {
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "percentiles4": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14271,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 12,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 94,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "358.261",
        "ok": "358.261",
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
