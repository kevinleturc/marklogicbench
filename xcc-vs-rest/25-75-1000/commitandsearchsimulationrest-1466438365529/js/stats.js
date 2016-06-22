var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29641",
        "ok": "29527",
        "ko": "114"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "10403"
    },
    "maxResponseTime": {
        "total": "60195",
        "ok": "57164",
        "ko": "60195"
    },
    "meanResponseTime": {
        "total": "1258",
        "ok": "1104",
        "ko": "41023"
    },
    "standardDeviation": {
        "total": "4733",
        "ok": "3808",
        "ko": "21962"
    },
    "percentiles1": {
        "total": "159",
        "ok": "159",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "260",
        "ok": "247",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "4803",
        "ok": "4364",
        "ko": "60066"
    },
    "percentiles4": {
        "total": "23229",
        "ok": "16264",
        "ko": "60093"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23199,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2291,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4037,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 114,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "429.692",
        "ok": "428.039",
        "ko": "1.653"
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
        "total": "22116",
        "ok": "22027",
        "ko": "89"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "10403"
    },
    "maxResponseTime": {
        "total": "60195",
        "ok": "57164",
        "ko": "60195"
    },
    "meanResponseTime": {
        "total": "1306",
        "ok": "1134",
        "ko": "43832"
    },
    "standardDeviation": {
        "total": "4947",
        "ok": "3921",
        "ko": "21503"
    },
    "percentiles1": {
        "total": "165",
        "ok": "164",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "255",
        "ok": "244",
        "ko": "60006"
    },
    "percentiles3": {
        "total": "5070",
        "ok": "4395",
        "ko": "60068"
    },
    "percentiles4": {
        "total": "29886",
        "ok": "16908",
        "ko": "60107"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17273,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1744,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3010,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 89,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "320.605",
        "ok": "319.315",
        "ko": "1.29"
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
        "total": "7525",
        "ok": "7500",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "10446"
    },
    "maxResponseTime": {
        "total": "60080",
        "ok": "55548",
        "ko": "60080"
    },
    "meanResponseTime": {
        "total": "1117",
        "ok": "1017",
        "ko": "31021"
    },
    "standardDeviation": {
        "total": "4035",
        "ok": "3454",
        "ko": "20622"
    },
    "percentiles1": {
        "total": "135",
        "ok": "135",
        "ko": "27255"
    },
    "percentiles2": {
        "total": "292",
        "ok": "265",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "4620",
        "ok": "4306",
        "ko": "60062"
    },
    "percentiles4": {
        "total": "16176",
        "ok": "15886",
        "ko": "60076"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5926,
        "percentage": 79
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 547,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1027,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 25,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "109.086",
        "ok": "108.724",
        "ko": "0.362"
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
