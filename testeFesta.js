const maxPeopleInTheParty= 10;
const ageMinParty= 16;
const ageMinDrink= 18;
const peopleInParty= [];

function handleSubmit(event){
    event.preventDefault()

    const data= new FormData(event.target)

    const name = data.get('name')
    const age  = data.get('age')
    const sex  = data.get('sex')

    canEnter(age,sex,name)//can enter= pode entrar
}

function checkLimitAgeToEnter(personAgeLimit){
    if(personAgeLimit >= ageMinParty){
        return true
    }else{
        return false
    }
}
function checkLimitMaxPeople(){
    return peopleInParty.length < maxPeopleInTheParty
}
function addPersonInParty(name,age,sex){
    peopleInParty.push({
        name,
        age,
        sex,
    })
}
function canEnter(personAge,personSex,personName){
    if(!checkLimitAgeToEnter(personAge)){
        alert('idade não permitida')
        return false
    }
    if(!checkLimitMaxPeople()){
        alert('limite da festa atingido')
        return false
    }
    addPersonInParty(personName,personAge,personSex)
    alert('deu bom')

}

