# API course

Tot 2:11:50

---> ondersteuning via postman API network tools DSO API's via postman met voorbeeld request builds for each programming language 1:45:00
example: https://www.postman.com/twilio/twilio-api/collection/ 
https://www.postman.com/webinars/

See 
- https://www.youtube.com/watch?v=WXsD0ZgxjRw
- https://github.com/TwilioDevEd/introduction-to-apis-notes/blob/main/course-notes.md


## Rest
Representational State Transfer 

Architectural constraints for a Restfull API
- Client-Server architecture
- Statelessness
- Cacheability
- Layered System
- Code on Demand
- Uniform Interface

[best practices](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/)

## JSON 
JavaScript Object Notation is used to structure and nest data.

## Explore spottify

- [Spottify for developers](https://developer.spotify.com/)
- [Spottify WEB Api](https://developer.spotify.com/documentation/web-api)


# Unit 2
## Video 1
- [developer](https://developer.spotify.com/)
- [web api](https://developer.spotify.com/documentation/web-api)


## Video 3
- [twilio](https://www.twilio.com/en-us) communications platform
   Twilio free phone nr: +18123591926

```bash
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$ACCOUNTSID/Messages.json" -u $ACCOUNTSID:$AUTHTOKEN--data-urlencode "From=+18123591926" --data-urlencode "Body=Hi there" --data-urlencode "To=+31617579127" 
 
  {
      "account_sid": "ACCID",
      "api_version": "2010-04-01",
      "body": "Sent from your Twilio trial account - Hi there",
      "date_created": "Fri, 04 Oct 2024 13:59:56 +0000",
      "date_sent": null,
      "date_updated": "Fri, 04 Oct 2024 13:59:56 +0000",
      "direction": "outbound-api",
      "error_code": null,
      "error_message": null,
      "from": "+18123591926",
      "messaging_service_sid": null,
      "num_media": "0",
      "num_segments": "1",
      "price": null,
      "price_unit": "USD",
      "sid": "SMa4d1d71f43969ecf5ba7abb0593dcda9",
      "status": "queued",
      "subresource_uris": {
          "media": "/2010-04-01/Accounts/ACID/Messages/SMa4d1d71f43969ecf5ba7abb0593dcda9/Media.json"
      },
      "to": "+31617579127",
      "uri": "/2010-04-01/Accounts/ACCID/Messages/SMa4d1d71f43969ecf5ba7abb0593dcda9.json"
  }
 
```

```bash
curl -X GET "https://api.twilio.com/2010-04-01/Accounts/$ACCOUNTSID/Messages.json" -u $ACCOUNTSID:$AUTHTOKEN \
-u $ACCOUNTSID:$AUTHTOKEN 

{
    "end": 2,
    "first_page_uri": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages.json?PageSize=50&Page=0",
    "messages": [
        {
            "account_sid": "AC07bb313591952a794858ba941f658583",
            "api_version": "2010-04-01",
            "body": "Sent from your Twilio trial account - Hi there",
            "date_created": "Fri, 04 Oct 2024 13:59:56 +0000",
            "date_sent": "Fri, 04 Oct 2024 13:59:56 +0000",
            "date_updated": "Fri, 04 Oct 2024 13:59:58 +0000",
            "direction": "outbound-api",
            "error_code": null,
            "error_message": null,
            "from": "+18123591926",
            "messaging_service_sid": null,
            "num_media": "0",
            "num_segments": "1",
            "price": "-0.09660",
            "price_unit": "USD",
            "sid": "SMa4d1d71f43969ecf5ba7abb0593dcda9",
            "status": "delivered",
            "subresource_uris": {
                "feedback": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMa4d1d71f43969ecf5ba7abb0593dcda9/Feedback.json",
                "media": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMa4d1d71f43969ecf5ba7abb0593dcda9/Media.json"
            },
            "to": "+31617579127",
            "uri": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMa4d1d71f43969ecf5ba7abb0593dcda9.json"
        },
        {
            "account_sid": "AC07bb313591952a794858ba941f658583",
            "api_version": "2010-04-01",
            "body": "Thanks for the message. Configure your number's SMS URL to change this message.Reply HELP for help.Reply STOP to unsubscribe.Msg&Data rates may apply.",
            "date_created": "Fri, 04 Oct 2024 13:45:26 +0000",
            "date_sent": "Fri, 04 Oct 2024 13:45:26 +0000",
            "date_updated": "Fri, 04 Oct 2024 13:45:26 +0000",
            "direction": "inbound",
            "error_code": 30039,
            "error_message": null,
            "from": "+18777804236",
            "messaging_service_sid": null,
            "num_media": "0",
            "num_segments": "1",
            "price": null,
            "price_unit": "USD",
            "sid": "SMe9198f2c6200a29f2a3fdf35a33b5300",
            "status": "failed",
            "subresource_uris": {
                "feedback": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMe9198f2c6200a29f2a3fdf35a33b5300/Feedback.json",
                "media": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMe9198f2c6200a29f2a3fdf35a33b5300/Media.json"
            },
            "to": "+18123591926",
            "uri": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SMe9198f2c6200a29f2a3fdf35a33b5300.json"
        },
        {
            "account_sid": "AC07bb313591952a794858ba941f658583",
            "api_version": "2010-04-01",
            "body": "Sent from your Twilio trial account - Hello there",
            "date_created": "Fri, 04 Oct 2024 13:45:22 +0000",
            "date_sent": "Fri, 04 Oct 2024 13:45:22 +0000",
            "date_updated": "Fri, 04 Oct 2024 13:45:24 +0000",
            "direction": "outbound-api",
            "error_code": null,
            "error_message": null,
            "from": "+18123591926",
            "messaging_service_sid": null,
            "num_media": "0",
            "num_segments": "1",
            "price": "-0.00790",
            "price_unit": "USD",
            "sid": "SM93d97af02c9157035e071a50faa74abe",
            "status": "delivered",
            "subresource_uris": {
                "feedback": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SM93d97af02c9157035e071a50faa74abe/Feedback.json",
                "media": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SM93d97af02c9157035e071a50faa74abe/Media.json"
            },
            "to": "+18777804236",
            "uri": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages/SM93d97af02c9157035e071a50faa74abe.json"
        }
    ],
    "next_page_uri": null,
    "page": 0,
    "page_size": 50,
    "previous_page_uri": null,
    "start": 0,
    "uri": "/2010-04-01/Accounts/AC07bb313591952a794858ba941f658583/Messages.json?PageSize=50&Page=0"
}
```

## Video 3
Using tools to explore API's

- [restfox](https://restfox.dev/)

## Video 6
Helper libraries to extract api details


