'use strict';

function removeBlocks(){
    let appContent = document.getElementById('appContent');
    if(appContent){
        let es = appContent.getElementsByTagName('p');
        //console.log('caixin:' + es);
        if(es){
            for (var i = 0; i < es.length; i++) {
                es[i].style = 'display:block';
            }
        }
        let tip = appContent.getElementsByClassName('cons-pay-tip');
        //console.log(tip);
        if(tip)appContent.removeChild(tip[0]);
        let box = appContent.getElementsByClassName('loadingBox');
        //console.log(box);
        if(box)appContent.removeChild(box[0]);
        //console.log(appContent);
    }
    else{
        console.log('appContent is nulll');
    }
}
removeBlocks();