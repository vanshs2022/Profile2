gsap.from(".edu",{
    x:"-200px",
    duration:2,
    scrollTrigger: ".edu"
})
gsap.from(".para",{
    y:"-200px",
    opacity:1,
    duration:3,
    scrollTrigger: ".para"
})
gsap.from(".ski",{
    y:"-200px",
    duration:3,
    scrollTrigger:".ski"
})
gsap.from(".work",{
    x:"-200px",
    duration:3,
    scrollTrigger:".work"
})
gsap.from("#head",{
    y:"-200px",
    duration:3,
    scrollTrigger:"#head"
})
gsap.from("#about2",{
    x:"200px",
    duration:3,
    scrollTrigger:"#about2"
})
gsap.from("#education2",{
    x:"200px",
    duration:3,
    scrollTrigger:"#education2"
})
gsap.from("#aniwork",{
    x:"200px",
    duration:3,
    scrollTrigger:"#aniwork"
})


// Resume functioning

const downloadButton = document.getElementById('downloadButton');

function downloadResume() {
    const resumeUrl = 'resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadButton.addEventListener('click', downloadResume);


document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let data = [[name, email, message]];

    let existingData = [];
    try {
        existingData = Papa.parse(localStorage.getItem("form_data"), { header: true }).data;
    } catch (e) {
        console.log("No existing data file found. Creating new file.");
    }

    data = existingData.concat(data);

    let csv = Papa.unparse(data);

    localStorage.setItem("form_data", csv);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Show popup
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = "Form submitted successfully!";
    popup.style.display = "block";

    // Close popup after 5 seconds
    setTimeout(function() {
        popup.style.display = "none";
    }, 5000);
});

