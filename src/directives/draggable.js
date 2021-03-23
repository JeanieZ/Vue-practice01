const draggable = {
    inserted: function (el) {
        el.style.cursor = 'move'
        el.onmousedown = function (e) {
            let disX = e.clientX - el.offsetLeft;
            let disY = e.clientY - el.offsetTop;
            document.onmousemove = function (e) {
                let curX = e.clientX;
                let curY = e.clientY;
                if((curX - disX) > 0){
                    el.style.left = (curX - disX)+'px';
                }else{
                    el.style.left = 0; 
                }

                if((curY - disY) > 0){
                    el.style.top = (curY - disY)+'px';
                }else{
                    el.style.top = 0; 
                }
               
                
            }
            document.onmouseup = function (e) {
                document.onmousemove = null;
            }
        }
    },
}
export default draggable
