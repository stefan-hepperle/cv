document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Construction du corps du mail
    let body = `Bonjour,\n\nDe : ${name}`;
    if (company) {
        body += `\nEntreprise : ${company}`;
    }
    body += `\n\n${message}\n\nCordialement,\n${name}`;
    
    // Construction du lien mailto
    const mailtoLink = `mailto:s_hepperle54@yahoo.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouverture du client mail
    window.location.href = mailtoLink;
});
