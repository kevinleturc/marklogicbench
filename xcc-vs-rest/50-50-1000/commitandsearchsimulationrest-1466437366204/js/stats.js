var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29429",
        "ok": "29387",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "14095"
    },
    "maxResponseTime": {
        "total": "61513",
        "ok": "61513",
        "ko": "60102"
    },
    "meanResponseTime": {
        "total": "1121",
        "ok": "1091",
        "ko": "22037"
    },
    "standardDeviation": {
        "total": "4168",
        "ok": "4065",
        "ko": "13163"
    },
    "percentiles1": {
        "total": "144",
        "ok": "143",
        "ko": "16840"
    },
    "percentiles2": {
        "total": "537",
        "ok": "507",
        "ko": "20685"
    },
    "percentiles3": {
        "total": "4142",
        "ok": "4036",
        "ko": "60070"
    },
    "percentiles4": {
        "total": "21889",
        "ok": "21373",
        "ko": "60090"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23936,
        "percentage": 81
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1545,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3906,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 42,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "430.079",
        "ok": "429.465",
        "ko": "0.614"
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
        "total": "14839",
        "ok": "14822",
        "ko": "17"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "14095"
    },
    "maxResponseTime": {
        "total": "61493",
        "ok": "61493",
        "ko": "60075"
    },
    "meanResponseTime": {
        "total": "1124",
        "ok": "1101",
        "ko": "20928"
    },
    "standardDeviation": {
        "total": "4078",
        "ok": "4009",
        "ko": "10326"
    },
    "percentiles1": {
        "total": "156",
        "ok": "156",
        "ko": "16854"
    },
    "percentiles2": {
        "total": "509",
        "ok": "483",
        "ko": "20686"
    },
    "percentiles3": {
        "total": "4265",
        "ok": "4116",
        "ko": "34206"
    },
    "percentiles4": {
        "total": "21085",
        "ok": "19260",
        "ko": "54901"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11988,
        "percentage": 81
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 843,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1991,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 17,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "216.859",
        "ok": "216.61",
        "ko": "0.248"
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
        "total": "14590",
        "ok": "14565",
        "ko": "25"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "14344"
    },
    "maxResponseTime": {
        "total": "61513",
        "ok": "61513",
        "ko": "60102"
    },
    "meanResponseTime": {
        "total": "1118",
        "ok": "1081",
        "ko": "22791"
    },
    "standardDeviation": {
        "total": "4258",
        "ok": "4121",
        "ko": "14737"
    },
    "percentiles1": {
        "total": "124",
        "ok": "124",
        "ko": "16839"
    },
    "percentiles2": {
        "total": "548",
        "ok": "521",
        "ko": "20680"
    },
    "percentiles3": {
        "total": "4069",
        "ok": "3969",
        "ko": "60059"
    },
    "percentiles4": {
        "total": "24365",
        "ok": "22294",
        "ko": "60095"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11948,
        "percentage": 82
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 702,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1915,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 25,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "213.22",
        "ok": "212.855",
        "ko": "0.365"
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
