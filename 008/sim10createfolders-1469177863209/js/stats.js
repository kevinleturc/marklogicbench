var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "277",
        "ok": "277",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1489",
        "ok": "1489",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 276,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.019",
        "ok": "5.019",
        "ko": "-"
    }
},
contents: {
"req_create-folder-f5132": {
        type: "REQUEST",
        name: "Create Folder",
path: "Create Folder",
pathFormatted: "req_create-folder-f5132",
stats: {
    "name": "Create Folder",
    "numberOfRequests": {
        "total": "276",
        "ok": "276",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "173",
        "ok": "173",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1489",
        "ok": "1489",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles2": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles3": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 275,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.001",
        "ok": "5.001",
        "ko": "-"
    }
}
    },"req_wait-for-async-c5b81": {
        type: "REQUEST",
        name: "Wait For Async",
path: "Wait For Async",
pathFormatted: "req_wait-for-async-c5b81",
stats: {
    "name": "Wait For Async",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles2": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles3": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles4": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
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
        "total": "0.018",
        "ok": "0.018",
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
