document.addEventListener("DOMContentLoaded", function () {
    // Select the VIP Members tab
    const vipLink = document.querySelector("a[href='#vip-members']");

    if (vipLink) {
        vipLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            window.location.href = "under-construction.html"; // Redirect to under construction page
        });
    }
});

