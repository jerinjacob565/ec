env:
    token=${{ secrets.TELE_BOT }};
function register() {
  var form = document.getElementById("contact");

  var name = document.getElementById("name").value;
  var emailid = document.getElementById("email").value;
  var mob = document.getElementById("phone-number").value;
  var dept = document.getElementById("dept").value;
  var sem = document.getElementById("sem").value;
 
  var data = { name: name, emailid: emailid, mob: mob, dept: dept, sem: sem };
  fetch(`https://api.telegram.org/${token}/sendMessage?chat_id=-1001967873486&text=hello2`)
  console.log(data);
  form.reset();
}
