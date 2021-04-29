function toolTip(){
    bill = document.getElementById('bill').value;
    serviceQuial = document.getElementById('serviceQuial').value;
    pepole = document.getElementById('pepole').value;

    if(bill == "" || serviceQuial == 0){
        alert("You don't enter any values");
        return;
    }
    if( bill <1 || pepole<1){
        alert('You entered Wrong value or negative value');
        return;
     }
    each = document.getElementById('each');
    if(pepole == "" || pepole==1){
     each.style.display = 'none';
    }
    else{
        each.style.display = 'block';
    }

    total = (bill*serviceQuial)/pepole;
    // total = Math.round(total*100)/100;
    total = total.toFixed(2);
    
    document.getElementById("tooltip").style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}

document.getElementById("tooltip").style.display = 'none';

calculate = document.getElementById('calculate');

calculate.addEventListener('click',toolTip);

