function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    // return Math.abs(age_dt.getUTCFullYear() - 1970);
    document.write(Math.abs(age_dt.getUTCFullYear() - 1970));
}

function darkmode(){
    document.body.classList.toggle('darkmode')
}

window.onload=function(){
    var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Use PC for better experience.");              
    } else {

    }
  }
// document.getElementsById('age').innerHTML = calculate_age(new Date(2003, 4, 27));