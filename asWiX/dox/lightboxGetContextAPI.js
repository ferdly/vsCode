/*************
 * Page Code *
 *************/

import wixWindow from 'wix-window';

export function openButton_click(event) {
  wixWindow.openLightbox("MyLightBox", {
    "pageSend1": $w('#pageSend1').value,
    "pageSend2": $w('#pageSend2').value
  })
  .then( (data) => {
    $w('#pageReceive1').text = data.lightBoxSend1;
    $w('#pageReceive2').text = data.lightBoxSend2;
  } );
}

/*****************
 * Lightbox Code *
 *****************/

import wixWindow from 'wix-window';

$w.onReady( function () {
  let received = wixWindow.lightbox.getContext();
  $w('#lightBoxReceive1').text = received.pageSend1;
  $w('#lightBoxReceive2').text = received.pageSend2;
} );

export function closeButton_click(event) {
  wixWindow.lightbox.close( {
    "lightBoxSend1": $w('#lightBoxSend1').value,
    "lightBoxSend2": $w('#lightBoxSend2').value
  } );
}
