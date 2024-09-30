const Name1 = document.getElementById('Name1')
const Email = document.getElementById('Email')
const Mobile = document.getElementById('Mobile')

form.addEventListener('submit', (e) => {
    let messeges = []
    if(Name1.value === '' || Name1.value == null){
        messege.push('Name is Required')
    }
    
    if(messeges.length > 0){
        e.preventDefautl()
        errorElement.innerText = messeges.join(', ')
    }

    if(Mobile.value.length <= 12){
        messages.push('Number Must be Amounts 12 Numbers')
    }
})
