// const button = document.querySelector("button")

// button.addEventListener("click",() => {
//     console.log("hai check new more text chrome")
//     Notification.requestPermission().then(perm =>{
//         if (perm === "granted"){
//             // new Notification("Example  notofication"),{
//             //     body: "This is more text"
//             // }
//             new Notification("Example notification", {
//                 body: "This is more text"
//             });
            
//         }
//     })
    
// })

// document.addEventListener("DOMContentLoaded", function() {
//     const button = document.querySelector("button");

//     // Add an event listener to the button for the 'click' event
//     button.addEventListener("click", () => {
//         // Log "hai" to the console when the button is clicked
//         console.log("hai");
 
//         // Request permission for notifications and handle the promise returned
//         Notification.requestPermission().then(permission => {
//             // Display an alert with the permission status ("granted", "denied", or "default")
//             alert(permission);
//         });
//     });
// });


const button = document.querySelector("button");

button.addEventListener("click", () => {

    console.log("hai check new more text");
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Example notification", {
                body: "This is more text",
                icon: "vinayakaLogo.png"
            });
        }
    });
});
