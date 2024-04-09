document.getElementById("button-el").addEventListener('click', function(){
    console.log("button clicked")
    document.getElementById("button-el").style.animation = 'none';
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("activity").textContent = data.activity;
            document.getElementById("title").textContent = "🦾😬 BusyBot 😬🦾";
            document.querySelector("main").classList.add("fun")
        });
});
