
document.getElementById("searchInput").addEventListener("keyup", ()=>{
    // console.log("key pressed");
    debouncedSearch("vikas Garg", "Delhi")
})

const handleSearch = (name, city) => {
    console.log(`search called by ${name} in ${city}`);
}

const debounce = function (callbackFunction, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            callbackFunction(...args);
        }, delay)
    }
}

const debouncedSearch = debounce(handleSearch, 300);

