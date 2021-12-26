

/* Variables */

/* Reference classes from html */
const trashContainer = document.querySelector('.debris-container')
const donationElement = document.querySelector('.donation')

/* Display currency */
const currencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

/* Pad numbers with 0 to avoid whitespace  */
const trashFormatter = new Intl.NumberFormat("en-us", {
    minimumIntegerDigits: 8,
    maximumFractionDigits: 0,
    useGrouping: false
})
console.log(trashFormatter.format(722))


const DONATION_TARGET = 30000000



// const amountCollected = 3000192
// donationElement.innerText = currencyFormatter.format(amountCollected)
setupDebris()       /* call async function below */

/* -------------------------------------------- */

/*  */

async function setupDebris(){
    const amountCollected = await fetch("https://tscache.com/donation_total.json")
    .then(res => res.json())
    .then(data => data.count)
    donationElement.innerText = currencyFormatter.format(amountCollected)


    /* Calculation for donation goal */
    const remainingDonation = Math.max(DONATION_TARGET - amountCollected, 0)     /* ensure no negative numbers past 0 */

    
}
