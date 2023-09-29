var form = document.getElementById("contact");
form.onsubmit = (e) => {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var emailid = document.getElementById("email").value;
  var mob = document.getElementById("phone-number").value;
  var dept = document.getElementById("dept").value;
  var sem = document.getElementById("sem").value;

  var data = { name: name, emailid: emailid, mob: mob, dept: dept, sem: sem };
  fetch(
    `https://api.telegram.org/bot5990879490:AAHTlMJrRwC-LRwHEV3FS34T9acm9l-yPmY/sendMessage?chat_id=-1001967873486&text=New%20Registeration%0AName%20%3D%20${name}%0AEmail%20%3D%20${emailid}%0AMobile%20%3D%20${mob}%0ADept%20%3D%20${dept}%0ASemester%3D%20${sem}`
  );
  console.log(data);
  form.reset();
};


var formy = document.getElementById("contacty");
formy.onsubmit = (e) => {
  e.preventDefault();
  var name = document.getElementById("namey").value;
  var email_id = document.getElementById("emaily").value;
  var msg = document.getElementById("messagey").value;
  var data = { name: name, emailid: email_id, msg: msg };
  console.log(data);
  fetch(
    `https://api.telegram.org/bot5990879490:AAHTlMJrRwC-LRwHEV3FS34T9acm9l-yPmY/sendMessage?chat_id=-1001967873486&text=New%20Query%0AName%20%3D%20${name}%0AEmail%20%3D%20${email_id}%0Amessage%20%3D%20${msg}`
  );
  formy.reset();
};
