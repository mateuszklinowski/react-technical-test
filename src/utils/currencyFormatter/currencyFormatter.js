export const currencyFormatter = (value = 0) => {
    const integerString = Array.from(Math.floor(value).toString()).reduceRight((acc, curr)=>{
        if(acc.replace(',',"").length % 3 === 0){
            return `${curr},${acc}`
        }

        return  curr+acc;
    } );

    const fraction = (value % 1).toFixed(2).substr(-2);

    return `£${integerString}.${fraction}`
};