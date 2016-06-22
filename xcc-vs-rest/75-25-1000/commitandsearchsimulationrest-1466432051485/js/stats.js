var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34647",
        "ok": "34567",
        "ko": "80"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "3435"
    },
    "maxResponseTime": {
        "total": "68385",
        "ok": "52355",
        "ko": "68385"
    },
    "meanResponseTime": {
        "total": "1073",
        "ok": "951",
        "ko": "54076"
    },
    "standardDeviation": {
        "total": "4462",
        "ok": "3592",
        "ko": "15234"
    },
    "percentiles1": {
        "total": "119",
        "ok": "118",
        "ko": "60006"
    },
    "percentiles2": {
        "total": "509",
        "ok": "498",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "3909",
        "ok": "3773",
        "ko": "60438"
    },
    "percentiles4": {
        "total": "16876",
        "ok": "15662",
        "ko": "62950"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29557,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 523,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4487,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 80,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "502.75",
        "ok": "501.589",
        "ko": "1.161"
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
        "total": "8816",
        "ok": "8795",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "3435"
    },
    "maxResponseTime": {
        "total": "61506",
        "ok": "52355",
        "ko": "61506"
    },
    "meanResponseTime": {
        "total": "936",
        "ok": "809",
        "ko": "54237"
    },
    "standardDeviation": {
        "total": "3686",
        "ok": "2499",
        "ko": "15508"
    },
    "percentiles1": {
        "total": "140",
        "ok": "140",
        "ko": "60088"
    },
    "percentiles2": {
        "total": "484",
        "ok": "459",
        "ko": "60121"
    },
    "percentiles3": {
        "total": "3803",
        "ok": "3735",
        "ko": "61479"
    },
    "percentiles4": {
        "total": "15069",
        "ok": "14520",
        "ko": "61500"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 7564,
        "percentage": 86
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 142,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1089,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 21,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "127.926",
        "ok": "127.621",
        "ko": "0.305"
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
        "total": "25831",
        "ok": "25772",
        "ko": "59"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "13632"
    },
    "maxResponseTime": {
        "total": "68385",
        "ok": "44945",
        "ko": "68385"
    },
    "meanResponseTime": {
        "total": "1120",
        "ok": "999",
        "ko": "54019"
    },
    "standardDeviation": {
        "total": "4697",
        "ok": "3895",
        "ko": "15135"
    },
    "percentiles1": {
        "total": "109",
        "ok": "108",
        "ko": "60004"
    },
    "percentiles2": {
        "total": "513",
        "ok": "504",
        "ko": "60008"
    },
    "percentiles3": {
        "total": "3948",
        "ok": "3815",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "23120",
        "ok": "16023",
        "ko": "63804"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21993,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 381,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3398,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 59,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "374.824",
        "ok": "373.968",
        "ko": "0.856"
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
