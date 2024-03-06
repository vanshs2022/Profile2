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
    y:"-100px",
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

gsap.from("#skills1",{
    x:"-100px",
    duration:2,
    scrollTrigger:"#skills1"
})

gsap.from("#skills4",{
    x:"-100px",
    duration:2,
    scrollTrigger:"#skills4"
})

gsap.from("#skills2",{
    y:"-100px",
    duration:2,
    scrollTrigger:"#skills2"
})

gsap.from("#skills5",{
    y:"100px",
    duration:2,
    scrollTrigger:"#skills3"
})

gsap.from("#skills3",{
    x:"100px",
    duration:2,
    scrollTrigger:"#skills3"
})

gsap.from("#skills6",{
    x:"100px",
    duration:2,
    scrollTrigger:"#skills6"
})

gsap.from("#exp1",{
    y:"100px",
    duration:2,
    scrollTrigger:"#exp1"
})

gsap.from("#exp2",{
    y:"-100px",
    duration:2,
    scrollTrigger:"#exp2"
})

gsap.from("#exp3",{
    y:"100px",
    duration:2,
    scrollTrigger:"#exp3"
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

document.querySelectorAll('.skillelement').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translate(10px, -10px)';
    });
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
    });
});


document.querySelectorAll('.wexpdiv').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translate(10px, -10px)';
    });
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
    });
});

document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(message + " is sent by " + name + " to you via " + email);

    // Show popup
    let popup = document.getElementById("popup");
    let popupMessage = document.getElementById("popupMessage");
    popupMessage.textContent = "Form submitted successfully!";
    popup.style.display = "block";

    // Close popup after 5 seconds
    setTimeout(function () {
        popup.style.display = "none";
    }, 5000);

    // Reset the form
    document.getElementById("form1").reset();
});

