var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "240100",
        "ok": "237601",
        "ko": "2499"
    },
    "minResponseTime": {
        "total": "291",
        "ok": "659",
        "ko": "291"
    },
    "maxResponseTime": {
        "total": "13095",
        "ok": "13095",
        "ko": "11680"
    },
    "meanResponseTime": {
        "total": "1358",
        "ok": "1365",
        "ko": "690"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "134",
        "ko": "251"
    },
    "percentiles1": {
        "total": "1357",
        "ok": "1358",
        "ko": "683"
    },
    "percentiles2": {
        "total": "1422",
        "ok": "1422",
        "ko": "730"
    },
    "percentiles3": {
        "total": "1542",
        "ok": "1543",
        "ko": "812"
    },
    "percentiles4": {
        "total": "1643",
        "ok": "1644",
        "ko": "895"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11538,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 226059,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 2499,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "23.536",
        "ok": "23.291",
        "ko": "0.245"
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
        "total": "240100",
        "ok": "237601",
        "ko": "2499"
    },
    "minResponseTime": {
        "total": "291",
        "ok": "659",
        "ko": "291"
    },
    "maxResponseTime": {
        "total": "13095",
        "ok": "13095",
        "ko": "11680"
    },
    "meanResponseTime": {
        "total": "1358",
        "ok": "1365",
        "ko": "690"
    },
    "standardDeviation": {
        "total": "152",
        "ok": "134",
        "ko": "251"
    },
    "percentiles1": {
        "total": "1357",
        "ok": "1358",
        "ko": "682"
    },
    "percentiles2": {
        "total": "1422",
        "ok": "1422",
        "ko": "730"
    },
    "percentiles3": {
        "total": "1542",
        "ok": "1543",
        "ko": "812"
    },
    "percentiles4": {
        "total": "1643",
        "ok": "1644",
        "ko": "895"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11538,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 226059,
        "percentage": 94
    },
    "group4": {
        "name": "failed",
        "count": 2499,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "23.536",
        "ok": "23.291",
        "ko": "0.245"
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
