var objc = JSON.parse($response.body);

objc.data.results.subscriptions = [
  {
    "id": "gg577fc-496g-6969-1337-475cj47fu573",
    "unit": "year",
    "status": "trial",
    "group_id": "c0c2bals",
    "autorenew_enabled": false,
    "expires_at": "2099-09-19T13:37:37.000Z",
    "in_retry_billing": false,
    "introductory_activated": false,
    "cancelled_at": null,
    "platform": "ios",
    "product_id": "ok.annual.sub",
    "retries_count": 0,
    "started_at": "2024-02-16T18:49:52.000Z",
    "local": false,
    "next_check_at": "2099-02-16T20:49:52.000Z",
    "kind": "autorenewable",
    "units_count": 1,
    "environment": "production",
    "original_transaction_id": "440001728855780"
  }
];

$done({ body: JSON.stringify(objc) });