var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39789",
        "ok": "39789",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles1": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "percentiles2": {
        "total": "109",
        "ok": "108",
        "ko": "-"
    },
    "percentiles3": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles4": {
        "total": "222",
        "ok": "222",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39789,
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
        "total": "991.923",
        "ok": "991.923",
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
        "total": "9958",
        "ok": "9958",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "358",
        "ok": "358",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "percentiles1": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "percentiles2": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles3": {
        "total": "151",
        "ok": "151",
        "ko": "-"
    },
    "percentiles4": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9958,
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
        "total": "248.249",
        "ok": "248.249",
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
        "total": "29831",
        "ok": "29831",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "389",
        "ok": "389",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "percentiles1": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles2": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "percentiles3": {
        "total": "115",
        "ok": "116",
        "ko": "-"
    },
    "percentiles4": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29831,
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
        "total": "743.674",
        "ok": "743.674",
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
