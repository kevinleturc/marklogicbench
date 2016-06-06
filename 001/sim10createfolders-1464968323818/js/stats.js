var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1305",
        "ok": "1302",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "73",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "2179",
        "ok": "2179",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "26"
    },
    "percentiles1": {
        "total": "146",
        "ok": "146",
        "ko": "78"
    },
    "percentiles2": {
        "total": "161",
        "ok": "161",
        "ko": "100"
    },
    "percentiles3": {
        "total": "176",
        "ok": "176",
        "ko": "118"
    },
    "percentiles4": {
        "total": "197",
        "ok": "197",
        "ko": "122"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1301,
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
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.578",
        "ok": "6.563",
        "ko": "0.015"
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
        "total": "1304",
        "ok": "1301",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "110",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "2179",
        "ok": "2179",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "87"
    },
    "standardDeviation": {
        "total": "59",
        "ok": "59",
        "ko": "26"
    },
    "percentiles1": {
        "total": "146",
        "ok": "146",
        "ko": "78"
    },
    "percentiles2": {
        "total": "160",
        "ok": "161",
        "ko": "100"
    },
    "percentiles3": {
        "total": "176",
        "ok": "176",
        "ko": "118"
    },
    "percentiles4": {
        "total": "197",
        "ok": "198",
        "ko": "122"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1300,
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
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.573",
        "ok": "6.558",
        "ko": "0.015"
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
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles2": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles3": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "percentiles4": {
        "total": "73",
        "ok": "73",
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
        "total": "0.005",
        "ok": "0.005",
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
