window.onload = function() {
    // Get the bill data from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const billData = JSON.parse(urlParams.get('billData'));
    console.log(billData);

    // Display the bill details
    const billContainer = document.getElementById('bill-container');
    let billHtml = '';
    billData.forEach((item, index) => {
        billHtml += `<p>Item ${index + 1}: ${item.item} - ₹${item.price}</p>`;
    });
    billHtml += `<p>Total: ₹${getTotal(billData)}</p>`;
    billContainer.innerHTML = billHtml;
};

function getTotal(billData) {
    // Calculate the total bill amount
    let total = 0;
    billData.forEach((item) => {
        total += item.price;
    });
    return total;
}