/*
rochat

[rewrite_local]
https://api.rochathub.com/inteco.user.v1.UserRightsService/GetUserRights url script-response-body https://https://github.com/listacc1sa/Ss/raw/refs/heads/main/quantumultx/js/2.js

[mitm]
hostname = api.rochathub.com

*/

var objc = JSON.parse($response.body);
    objc = {
  "rights" : {
    "reachedAppRating" : true,
    "memberShipRights" : {
      "term" : "GIVEAWAY",
      "expiredtime" : "1883639265",
      "gameCredit" : 10,
      "userRoleType" : "CREATOR",
      "starttime" : "1734391800"
    },
    "generabotDisplayName" : "General Bot",
    "premiumbotDisplayName" : "Premium Bot",
    "isInvited" : true,
    "gptDisplayName" : "GPT-4"
  }
}


$done({body : JSON.stringify(objc)});
