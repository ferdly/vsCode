/**
 * @url:https://www.wix.com/velo/forum/coding-with-velo/update-records-using-wixdata-update-creates-a-new-record-in-the-same-collection
 * @author: russian-dima
 */

function UPDATE_JUST_ONE_ColumnItem  (parameter) {
    let toUpdateRowData = "title3";
       console.log(toUpdateRowData)
   
       wixData.query("DATABASE1")
       .eq("title", toUpdateRowData)
       .find()
       .then((results) => {
            if (results.items.length > 0) {
                let item = results.items[0];
                item.reference2 = "Smith";
                wixData.update("DATABASE1", item);
           }
       })
   }