module.exports = {
    async onlyNumber(evt) {
        let theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        let regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault()
           await this.$Message.error({message: 'Numbers only!', duration: 999})
        }
     },
     isNumber(str) {
      return !isNaN(parseFloat(str)) && isFinite(str);
     },
     onlyBin(str) {

      if(str.match(/[2-9]/)) {
        return true
      } else {
        return false
      }
      },
      parserBin(str) {
         try{
           if(isNaN(parseInt(str, 2))) {
             return ''
           } else {
             return parseInt(str, 2)
           }
         } catch(e) {
           throw 'error'
         }
       }
}