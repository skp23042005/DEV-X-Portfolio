document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
     const summary = document.getElementById('subject').value;
    const experience = document.getElementById('massage').value;
    

    const mailtoLink = `mailto:k4070514shivampandey@gmail.com?subject=New%20Resume%20Submission&body=
    Full%20Name: ${name}%0A
    Email: ${email}%0A 
    Summary: ${subject}%0A
    Experience: ${massage}%0A
    `;
    window.location.href = mailtoLink;
    
    alert('Your information has been submitted successfully!');
    
});