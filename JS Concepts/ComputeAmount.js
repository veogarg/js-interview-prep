/**
 * Input will be like computeAmount().lac(15).crore(5).thousand(10).value()
 * output will be 51510000
 */

function calculator() {
    this.total = 0
    this.lac = function(amount) {
        this.total += amount * 100000;
        return this;
    }
    this.crore = function(amount) {
        this.total += amount * 10000000;
        return this;
    }
    this.thousand = function(amount) {
        this.total += amount * 1000;
        return this;
    }
    this.value = function(){
        return this.total
    }
    return this;
}

function computeAmount(){
    return new calculator()
}

console.log("1", computeAmount().lac(15).crore(5).thousand(10).value())


/**
 * Input will be like computeAmount.lac(15).crore(5).thousand(10).value()
 * output will be 51510000
 */

function ComputeAmount(){
    this.total = 0
}

ComputeAmount.prototype.lac = function(amt){
    this.total += amt*100000
    return this;
}
ComputeAmount.prototype.crore = function(amt){
    this.total += amt*10000000
    return this;
}
ComputeAmount.prototype.thousand = function(amt){
    this.total += amt*1000
    return this;
}
ComputeAmount.prototype.value = function(){
    return this.total;
}

let computeAmt = new ComputeAmount();
function compute(){
    return new ComputeAmount();
}
console.log("2", computeAmt.lac(15).crore(5).thousand(10).value())
console.log("3", compute().lac(15).crore(5).thousand(10).value())