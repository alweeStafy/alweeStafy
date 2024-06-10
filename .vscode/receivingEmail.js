
      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyizf8ayFSIceONtczyIbrwB9QjAv0XScfJ8y8OevCfwo19lNim0IfP7YDqQXNFatm0aA/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
      const currentDate = new Date();
      
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "Your message has been sent. Thank you!"
              setTimeout(function(){
                msg.innerHTML = ""
              },5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
      
 
        document.getElementById("dateDisplay").innerHTML = currentDate;
