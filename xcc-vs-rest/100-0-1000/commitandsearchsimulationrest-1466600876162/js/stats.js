var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47352",
        "ok": "47291",
        "ko": "61"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "29232"
    },
    "maxResponseTime": {
        "total": "66613",
        "ok": "66613",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "897",
        "ok": "822",
        "ko": "59514"
    },
    "standardDeviation": {
        "total": "3618",
        "ok": "2941",
        "ko": "3909"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "406",
        "ok": "403",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "3568",
        "ok": "3538",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "15499",
        "ok": "15086",
        "ko": "60256"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40231,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 443,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6617,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 61,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "690.323",
        "ok": "689.433",
        "ko": "0.889"
    }
},
contents: {
"req_commit-fffca": {
        type: "REQUEST",
        name: "commit",
path: "commit",
pathFormatted: "req_commit-fffca",
stats: {
    "name": "commit",
    "numberOfRequests": {
        "total": "47352",
        "ok": "47291",
        "ko": "61"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "5",
        "ko": "29232"
    },
    "maxResponseTime": {
        "total": "66613",
        "ok": "66613",
        "ko": "60334"
    },
    "meanResponseTime": {
        "total": "897",
        "ok": "822",
        "ko": "59514"
    },
    "standardDeviation": {
        "total": "3618",
        "ok": "2941",
        "ko": "3909"
    },
    "percentiles1": {
        "total": "97",
        "ok": "97",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "406",
        "ok": "403",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "3568",
        "ok": "3538",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "15499",
        "ok": "15086",
        "ko": "60256"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40231,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 443,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6617,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 61,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "690.323",
        "ok": "689.433",
        "ko": "0.889"
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
