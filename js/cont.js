     // Public Key Initialize
    emailjs.init("hVpBzMJNi5s0B8rok");

    document.getElementById('meassagefrom').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const btn = document.getElementById('submit-btn');
        const statusBox = document.getElementById('status-box');
        
        btn.innerText = 'SENDING...';
        btn.disabled = true;

        // NEW Service ID & Template ID Fixed
       // Agar aapki ID 'template_9j3uhdn' hai, toh line aisi dikhegi:
emailjs.sendForm('service_4dhofue', 'template_9j3uhdn', this)
            .then(function() {
                btn.innerText = 'SEND MESSAGE!';
                btn.disabled = false;
                statusBox.className = "status-msg success";
                statusBox.innerText = "✓ Success! Your message has been sent directly to Shivam.";
                
                document.getElementById('meassagefrom').reset(); 
                setTimeout(() => { statusBox.className = "status-msg"; }, 6000);
            }, function(error) {
                btn.innerText = 'SEND MESSAGE!';
                btn.disabled = false;
                statusBox.className = "status-msg error";
                statusBox.innerText = "❌ Error: " + JSON.stringify(error.text || error);
                console.error('EmailJS Error:', error);
            });
    });