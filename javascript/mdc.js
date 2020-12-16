
module.exports = {
    mdc: function mdc (n1, n2) {
        if(n2 == 0){
            return n1
        }
        else{
            return mdc(n2, n1 % n2)
        }
    }
}
