var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "102250",
        "ok": "214517",
        "ko": "102250"
    },
    "maxResponseTime": {
        "total": "214517",
        "ok": "214517",
        "ko": "102250"
    },
    "meanResponseTime": {
        "total": "158383",
        "ok": "214517",
        "ko": "102250"
    },
    "standardDeviation": {
        "total": "56133",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "158383",
        "ok": "214517",
        "ko": "102250"
    },
    "percentiles2": {
        "total": "186450",
        "ok": "214517",
        "ko": "102250"
    },
    "percentiles3": {
        "total": "208903",
        "ok": "214517",
        "ko": "102250"
    },
    "percentiles4": {
        "total": "213394",
        "ok": "214517",
        "ko": "102250"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.006",
        "ok": "0.003",
        "ko": "0.003"
    }
},
contents: {
"req_mass-import-100-ef0cf": {
        type: "REQUEST",
        name: "Mass import 100000 with 12 threads",
path: "Mass import 100000 with 12 threads",
pathFormatted: "req_mass-import-100-ef0cf",
stats: {
    "name": "Mass import 100000 with 12 threads",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "percentiles2": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "percentiles3": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "percentiles4": {
        "total": "214517",
        "ok": "214517",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.003",
        "ok": "0.003",
        "ko": "-"
    }
}
    },"req_wait-for-async--91d30": {
        type: "REQUEST",
        name: "Wait for async jobs",
path: "Wait for async jobs",
pathFormatted: "req_wait-for-async--91d30",
stats: {
    "name": "Wait for async jobs",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "maxResponseTime": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "meanResponseTime": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "percentiles2": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "percentiles3": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "percentiles4": {
        "total": "102250",
        "ok": "-",
        "ko": "102250"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
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
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.003",
        "ok": "-",
        "ko": "0.003"
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
