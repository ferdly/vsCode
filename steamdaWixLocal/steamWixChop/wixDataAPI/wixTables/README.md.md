# WiX Data API Tables

 - where indicated, folder by WiX 'package' ie: 'Bookings', 'Blog' and so on
 - it would seem, at this time, that I am only able to access 'backend WiX data' in Editor/Dev-Mode
 - use 'Table' as universal term, WiX uses 'Collection'
- always include:
    - csv{TableName}
    - json{TableName}
    - json{TableName}Items

## csv{TableName}
- example: csvServices
- just the full export from WiX Content Manager
- 'sandbox' okay if representative

## json{TableName}
- example: jsonServices
- use http://www.convertcsv.com/csv-to-json.htm
-  will use _Label Names_ and not _Keys_

## json{TableName}Items
- example: jsonServicesItems
- a single, full, element of the JSON (above) 
- first file: ServicesItem.json
    - any actual element of above as is [not a single element array]
- second file: ServicesItemKeyed.json
    - this with the _Label Name_ element names changed to the corollary _Key_ element names 


> Written with [StackEdit](https://stackedit.io/).
