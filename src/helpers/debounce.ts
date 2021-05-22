export const debounce = (fn: () => void, time: number) => {
    let timeOut;
    return function() {
        let context = this;
        let args = arguments;
				clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn.apply(context, args);
       },time);
    };
}