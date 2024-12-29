#!name=AllinOneRewrite 
#!desc=sultan

[Script]
auto = type=http-response, pattern=^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$), script-path=https://github.com/osinx/Script/raw/refs/heads/main/vip/revenuecat.js, requires-body=true, script-update-interval=0, timeout=10

apphud = type=http-response, pattern=https:\/\/api\.apphud\.com\/v1\/(subscriptions|customers), script-path=https://raw.githubusercontent.com/listacc1sa/Ss/refs/heads/main/quantumultx/js/10mail.js, requires-body=true, script-update-interval=0, timeout=10


chat Uncensored = type=http-response, pattern=https://api.adapty.io/api/v1/sdk/in-apps/apple/receipt/validate/, script-path=https://raw.githubusercontent.com/listacc1sa/Ss/refs/heads/main/quantumultx/js/chatUncensored.js, requires-body=true, script-update-interval=0, timeout=10
chat Uncensored = type=http-response, pattern=https://api.adapty.io/api/v1/sdk/analytics/profiles, script-path=https://raw.githubusercontent.com/listacc1sa/Ss/refs/heads/main/quantumultx/js/chatUncensored.js, requires-body=true, script-update-interval=0, timeout=10
[MITM]
hostname = %APPEND% api.adapty.io, api.apphud.com, api.revenuecat.com
