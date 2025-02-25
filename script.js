function showProductDetails(productId) {
    // ซ่อนรายละเอียดสินค้าทั้งหมดก่อน
    var allDetails = document.querySelectorAll('.product-details');
    allDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // แสดงรายละเอียดของสินค้าที่เลือก
    var productDetails = document.getElementById(productId);
    if (productDetails) {
        productDetails.style.display = 'block';
    }
}

function hideProductDetails(productId) {
    var productDetails = document.getElementById(productId);
    if (productDetails) {
        productDetails.style.display = 'none';
    }
}  
function showProductDetails(id) {
    let product = document.getElementById(id);
    if (product) {
        product.style.display = "block"; // แสดงสินค้าโดยไม่ต้องรอ
    }
}

