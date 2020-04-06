
function printForm() {
    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let subject = document.getElementById("subject");
    let massage = document.getElementById("massage");

    console.log("Name is : ", name.value);
    console.log("Mail is : ", mail.value);
    console.log("Subject is : ", subject.value);
    console.log("Massage is : ", massage.value);

}