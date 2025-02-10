document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const role = document.getElementById('role');
    const drugIdInput = document.getElementById('drug-id');
    const verifyDrugButton = document.getElementById('verify-drug');
    const verificationResult = document.getElementById('verification-result');
    const logoutButton = document.getElementById('logout');
    const userData = {
        username: 'gayathri',
        email: 'gayathrisurapathi@gmail.com',
        role: 'Manufacturer'
    };

    username.value = userData.username;
    email.value = userData.email;
    role.value = userData.role;


    verifyDrugButton.addEventListener('click', function() {
        const drugId = drugIdInput.value;
        if (drugId) {
            
            setTimeout(() => {
                const isAuthentic = Math.random() > 0.5;
                if (isAuthentic) {
                    verificationResult.textContent = 'Drug is authentic.';
                    verificationResult.style.color = 'green';
                } else {
                    verificationResult.textContent = 'Drug is counterfeit!';
                    verificationResult.style.color = 'red';
                }
            }, 1000);
        } else {
            verificationResult.textContent = 'Please enter a Drug ID.';
            verificationResult.style.color = 'red';
        }
    });

    
    logoutButton.addEventListener('click', function() {
        window.location.href = '/PSC/index/index.html';
    });
});