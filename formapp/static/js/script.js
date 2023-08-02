function removeAlerts() {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
        setTimeout(() => {
            alert.classList.add('fade-out');
        }, 2000); // 5000 milliseconds (5 seconds) - you can adjust this value as needed
    });
}

// Call the function to remove the alerts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    removeAlerts();

    // After the fade-out effect is complete, remove the alert from the DOM
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
        alert.addEventListener('animationend', () => {
            alert.style.display = 'none';
        });
    });
});

// Add an event listener to execute the code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  setDefaultTab();
});

function setDefaultTab() {
  // Get the first tab and open it
  var firstTab = document.querySelector(".tabcontent");
  firstTab.style.display = "block";

  // Get the corresponding tab link and add the 'active' class
  var firstTabLink = document.querySelector('button.tablink[onclick="openTab(\'' + firstTab.id + '\')"]');
  firstTabLink.classList.add("active");
}

function openTab(tabName) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove 'active' class from all tab links
  var tabLinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add 'active' class to the clicked tab link
  var clickedTabLink = document.querySelector(`button.tablink[onclick="openTab('${tabName}')"]`);
  clickedTabLink.classList.add("active");
}
