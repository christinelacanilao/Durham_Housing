// Obtained from https://www.geeksforgeeks.org/how-to-show-page-loading-div-until-the-page-has-finished-loading/

document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                        document.querySelector(
                                    "body").style.visibility = "hidden";
                        document.querySelector(
                                    "#loader").style.visibility = "visible";
            } else {
                        document.querySelector(
                                    "#loader").style.display = "none";
                        document.querySelector(
                                    "body").style.visibility = "visible";
            }
};
                                    
