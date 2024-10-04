# API course

Tot 0:55:00

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

curl -X POST "https://api.twilio.com/2010-04-01/Accounts/ACCID/Messages.json" -u <ACID>:<ACTOK> --data-urlencode "From=+18123591926" --data-urlencode "Body=Hi there" --data-urlencode "To=+31617579127" 
 <code>
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
  <code>

