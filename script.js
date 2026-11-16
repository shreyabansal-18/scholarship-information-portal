//-------------------- SEARCH ---------------------

document.addEventListener("DOMContentLoaded",function(){

const allSearchInput=document.querySelector(".all-search input");

const homeSearchInput=document.querySelector(".home-search input");

const cards=document.querySelectorAll(".scholarship-card");

function searchScholarships(input){

if(input){

input.addEventListener("input",function(){

let value=input.value.toLowerCase();

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});

}

}

searchScholarships(allSearchInput);

searchScholarships(homeSearchInput);

});



//---------------- DETAILS ----------------


const scholarshipData={

"AICTE Pragati Scholarship":{

category:"Girls / Engineering",

about:"Financial support for female students pursuing technical education.",

amount:"Up to ₹50,000",

eligibility:[

"Female Students",

"Engineering Course",

"Indian Citizen"

],

documents:[

"Marksheet",

"Income Certificate",

"College ID",

"Aadhaar Card"

],

link:"https://www.aicte-india.org"

},

"National Scholarship Portal (NSP)":{

category:"Government",


about:"National Scholarship Portal (NSP) is a government platform that provides various scholarship schemes for students from central and state governments and other departments.",

amount:"Varies according to scholarship scheme",

eligibility:[
"Indian students",
"Eligibility depends on selected scholarship scheme",
"Students from different categories can apply",
"Academic and income criteria may apply"
],

documents:[
"Academic Marksheet",
"Income Certificate",
"Category Certificate (if applicable)",
"Identity Proof",
"Bank Account Details",
"Admission Proof"
],

link:"https://nsp.gov.in"

},


"Deutsche Bank Engineering Scholarship":{

category:"Girls / Engineering",

about:"Scholarship by Deutsche Bank and Smile Foundation for deserving female engineering students.",

amount:"Up to ₹1,00,000",

eligibility:[

"Female Engineering Students",

"Good Academic Record",

"Financial Need"

],

documents:[

"10th Marksheet",

"12th Marksheet",

"Income Certificate",

"College ID",

"Aadhaar Card"

],

link:"https://www.smilefoundationindia.org"

},


"AICTE Saksham Scholarship":{

    category:"Government / Engineering",

    about:"AICTE Saksham Scholarship is a government scheme implemented by AICTE to support specially-abled students pursuing technical diploma and degree courses.",

    amount:"₹50,000 per year",

    eligibility:[
        "Students with 40% or more disability",
        "Must be admitted to the first year of a technical degree or diploma course",
        "Second-year students admitted through lateral entry are also eligible",
        "Must study in an AICTE-approved institution",
        "Family income should not exceed ₹8 lakh per annum"
    ],

    documents:[
        "Disability Certificate",
        "Income Certificate",
        "Academic Marksheet",
        "College Admission Proof",
        "Aadhaar Card",
        "Bank Account Details"
    ],

    link:"https://scholarships.gov.in"

},


"Tata Capital Pankh Scholarship":{

category:"Need Based",

about:"Tata Capital Pankh Scholarship provides financial support to deserving students pursuing higher education.",

amount:"Up to ₹50,000",

eligibility:[
"Indian students",
"Studying in higher education",
"Financial need"
],

documents:[
"Marksheet",
"Income Certificate",
"College ID",
"Aadhaar Card"
],

link:"https://www.tatacapital.com"
},

"HDFC Bank Parivartan Scholarship":{

category:"Merit / Need Based",

about:"HDFC Bank Parivartan Scholarship provides financial support to students from economically weaker sections to continue their education.",

amount:"Up to ₹75,000",

eligibility:[
"Indian students",
"School or college students",
"Good academic performance",
"Family income criteria should be fulfilled"
],

documents:[
"Academic Marksheet",
"Income Certificate",
"Identity Proof",
"College ID Card",
"Bank Account Details"
],

link:"https://www.hdfcbank.com"

},

"Kotak Kanya Scholarship":{

category:"Girls Scholarship",

about:"Kotak Kanya Scholarship provides financial assistance to meritorious female students pursuing professional courses and higher education.",

amount:"Up to ₹1,50,000 per year",

eligibility:[
"Female students",
"Studying professional courses like Engineering, Medical, etc.",
"Good academic performance",
"Family income criteria should be fulfilled"
],

documents:[
"10th Marksheet",
"12th Marksheet",
"College Admission Proof",
"Income Certificate",
"Aadhaar Card",
"Bank Account Details"
],

link:"https://www.kotak.com"

},

"Reliance Foundation Undergraduate Scholarship":{

category:"Undergraduate",

about:"Reliance Foundation Undergraduate Scholarship supports talented undergraduate students by providing financial assistance for higher education.",

amount:"Up to ₹2,00,000",

eligibility:[
"Undergraduate students",
"Good academic performance",
"Indian citizen",
"Financial need"
],

documents:[
"Academic Marksheet",
"Income Certificate",
"College ID",
"Aadhaar Card",
"Bank Details"
],

link:"https://www.reliancefoundation.org"

},

"LIC Golden Jubilee Scholarship":{

category:"Merit Based",

about:"LIC Golden Jubilee Scholarship provides financial support to meritorious students pursuing higher education.",

amount:"Up to ₹40,000 per year",

eligibility:[
"Students with good academic performance",
"Students pursuing higher education",
"Income criteria should be fulfilled"
],

documents:[
"Marksheet",
"Income Certificate",
"Admission Proof",
"Identity Proof"
],

link:"https://licindia.in"

},

"Santoor Scholarship":{

category:"Girls Scholarship",

about:"Santoor Scholarship helps female students continue their higher education by providing financial support.",

amount:"Up to ₹60,000",

eligibility:[
"Female students",
"Completed 12th standard",
"Pursuing higher education"
],

documents:[
"10th Marksheet",
"12th Marksheet",
"College Admission Proof",
"Income Certificate"
],

link:"https://www.santoor.co.in"

},

"Mahindra Finance Scholarship":{

category:"Need Based",

amount:"Up to ₹10,000–₹25,000",

about:"Mahindra Finance Scholarship provides educational support to students facing financial difficulties.",

eligibility:[
"Students pursuing higher education",
"Financial need",
"Academic performance criteria"
],

documents:[
"Marksheet",
"Income Certificate",
"College ID",
"Bank Details"
],

link:"https://www.mahindrafinance.com"

},

"Infosys Scholarship":{

category:"Technology",

about:"Infosys Scholarship provides opportunities and financial support to deserving students in education and technology fields.",

amount:"Financial Support",

eligibility:[
"Students pursuing higher education",
"Academic merit",
"Technology related courses preferred"
],

documents:[
"Academic Records",
"College ID",
"Income Certificate"
],

link:"https://www.infosys.com"

},

"Aditya Birla Scholarship":{

category:"Merit Based",

about:"Aditya Birla Scholarship supports high-performing students studying in reputed educational institutions.",

amount:"Up to ₹1.75 lakh per year",

eligibility:[
"Meritorious students",
"Higher education students",
"Academic excellence"
],

documents:[
"Academic Marksheet",
"College Admission Proof",
"Identity Proof"
],

link:"https://www.adityabirla.com"

},

"Foundation For Excellence Scholarship":{

category:"Engineering / Medical",

about:"Foundation For Excellence Scholarship helps talented students pursue professional courses like Engineering and Medical education.",

amount:"Up to ₹60,000",

eligibility:[
"Engineering students",
"Medical students",
"Academic merit",
"Financial need"
],

documents:[
"Marksheet",
"Income Certificate",
"College ID",
"Admission Proof"
],

link:"https://ffe.org"

},

"IET India Scholarship":{

category:"Engineering",

about:"IET India Scholarship recognises outstanding engineering students for academic and technical achievements.",

amount:"Up to ₹3,00,000",

eligibility:[
"Engineering students",
"Strong academic performance",
"Technical achievements"
],

documents:[
"Academic Records",
"College ID",
"Achievement Certificates"
],

link:"https://www.theiet.org"

},

"Vidyasaarathi Scholarship":{

category:"Private Scholarship",

about:"Vidyasaarathi provides multiple scholarship opportunities from corporate organizations for students.",

amount:"Varies",

eligibility:[
"Students pursuing education",
"Eligibility depends on scholarship provider"
],

documents:[
"Marksheet",
"Income Certificate",
"Identity Proof"
],

link:"https://www.vidyasaarathi.co.in"

},

"Dr. Ambedkar Scholarship":{

category:"Government",

about:"Dr. Ambedkar Scholarship provides financial assistance to eligible students under government schemes.",

amount:"Financial Assistance",

eligibility:[
"Eligible category students",
"Academic requirements",
"Income criteria"
],

documents:[
"Marksheet",
"Income Certificate",
"Category Certificate",
"Identity Proof"
],

link:"https://scholarships.gov.in"

},

"State Government Scholarship":{

category:"Government",

about:"State Government Scholarships provide financial support to students through various state schemes.",

amount:"Varies",

eligibility:[
"State eligible students",
"Academic requirements",
"Income criteria"
],

documents:[
"Residence Certificate",
"Income Certificate",
"Marksheet",
"Bank Details"
],

link:"https://scholarships.gov.in"

},

"Merit Cum Means Scholarship":{

category:"Merit / Need Based",

about:"Merit Cum Means Scholarship supports students who have academic merit along with financial need.",

amount:"Up to ₹50,000 per year",

eligibility:[
"Academic merit",
"Financial need",
"Higher education students"
],

documents:[
"Marksheet",
"Income Certificate",
"Admission Proof"
],

link:"https://scholarships.gov.in"

},

"College Board India Scholarship":{

category:"Student Support",

about:"College Board India Scholarship provides financial assistance opportunities for eligible students.",

amount:"Financial Assistance",

eligibility:[
"Eligible students",
"Academic performance",
"Education requirements"
],

documents:[
"Academic Records",
"Identity Proof",
"Admission Proof"
],

link:"https://www.collegeboard.org"

},

"PM Vidyalaxmi Scheme":{

category:"Government",

about:"PM Vidyalaxmi Scheme provides financial support for students pursuing higher education.",

amount:"Education Support",

eligibility:[
"Higher education students",
"Eligible institutions",
"Government guidelines"
],

documents:[
"Admission Letter",
"Academic Records",
"Identity Proof",
"Income Certificate"
],

link:"https://www.education.gov.in"

},


"Women in Engineering Scholarship":{

    category:"Girls / Engineering",

    about:"Women in Engineering Scholarship encourages female students to pursue engineering education.",

    amount:"Financial Assistance",

    eligibility:[
        "Female engineering students",
        "Academic performance",
        "Interest in technology"
    ],

    documents:[
        "Marksheet",
        "College ID",
        "Income Certificate"
    ],

    link:"https://www.smilefoundationindia.org"

},

}; // Close scholarshipData object


// DETAILS PAGE

if(document.getElementById("title")){

    let selected = localStorage.getItem("selectedScholarship");

    let scholarship = scholarshipData[selected];

    console.log(selected);
    console.log(scholarship);

    if(scholarship){

        document.getElementById("title").innerHTML = selected;
        document.getElementById("category").innerHTML = scholarship.category;
        document.getElementById("about").innerHTML = scholarship.about;
        document.getElementById("amount").innerHTML = scholarship.amount;
        document.getElementById("applyLink").href = scholarship.link;

        document.getElementById("eligibility").innerHTML = "";

        scholarship.eligibility.forEach(function(item){
            document.getElementById("eligibility").innerHTML += "<li>" + item + "</li>";
        });

        document.getElementById("documents").innerHTML = "";

        scholarship.documents.forEach(function(item){
            document.getElementById("documents").innerHTML += "<li>" + item + "</li>";
        });

    }

}
const darkToggle = document.getElementById("darkToggle");

if (darkToggle) {

    darkToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkToggle.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkToggle.innerHTML = "🌙";
        }

    });

}

// Keep theme after refresh

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (darkToggle) {
        darkToggle.innerHTML = "☀️";
    }

}
window.addEventListener("load", function(){

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

    }

});

function applyScholarship(name){

let applied = JSON.parse(localStorage.getItem("appliedScholarships")) || [];

if(!applied.includes(name)){

    applied.push(name);

    localStorage.setItem(
        "appliedScholarships",
        JSON.stringify(applied)
    );

    alert(name + " applied successfully!");

}
else{

    alert("Already applied!");

}

}


window.onload=function(){

let list=document.getElementById("appliedList");

if(list){

let applied = JSON.parse(localStorage.getItem("appliedScholarships")) || [];

if(applied.length === 0){

list.innerHTML="<li>No scholarships applied yet</li>";

}

else{

applied.forEach(function(item){

let li=document.createElement("li");

li.innerHTML=item;

list.appendChild(li);

});

}

}

}
let imageUpload = document.getElementById("imageUpload");

if(imageUpload){

imageUpload.onchange = function(){

let reader = new FileReader();

reader.onload = function(){

document.getElementById("profileImage").src = reader.result;

localStorage.setItem("profileImage", reader.result);

}

reader.readAsDataURL(this.files[0]);

}

}


// Show saved image after refresh

let savedImage = localStorage.getItem("profileImage");

if(savedImage && document.getElementById("profileImage")){

document.getElementById("profileImage").src = savedImage;

}
function openEdit(){

document.getElementById("editBox").style.display="flex";

}


function closeEdit(){

document.getElementById("editBox").style.display="none";

}


function saveProfile(){

let profile = {

name: document.getElementById("editName").value,
email: document.getElementById("editEmail").value,
course: document.getElementById("editCourse").value,
college: document.getElementById("editCollege").value,
year: document.getElementById("editYear").value,
category: document.getElementById("editCategory").value,
state: document.getElementById("editState").value

};


// Save profile data
localStorage.setItem(
"profileData",
JSON.stringify(profile)
);


// Update profile page
document.getElementById("studentName").innerHTML = profile.name;

document.getElementById("studentEmail").innerHTML = profile.email;

document.getElementById("course").innerHTML = profile.course;

document.getElementById("college").innerHTML = profile.college;

document.getElementById("year").innerHTML = profile.year;

document.getElementById("category").innerHTML = profile.category;

document.getElementById("state").innerHTML = profile.state;


closeEdit();

alert("Profile Updated!");

}
function saveScholarship(name){

let saved = JSON.parse(localStorage.getItem("savedScholarships")) || [];


if(!saved.includes(name)){

    saved.push(name);

    localStorage.setItem(
        "savedScholarships",
        JSON.stringify(saved)
    );

    alert(name + " saved!");

}

else{

    alert("Already saved!");

}

updateSavedCount();

}



function updateSavedCount(){

let saved = JSON.parse(localStorage.getItem("savedScholarships")) || [];


let count = document.getElementById("savedCount");


if(count){

count.innerHTML = saved.length;

}


let list = document.getElementById("savedList");


if(list){

list.innerHTML="";


saved.forEach(function(item){

let li=document.createElement("li");

li.innerHTML="⭐ "+item;

list.appendChild(li);

});

}

}


updateSavedCount();

let profile = JSON.parse(localStorage.getItem("profileData"));


if(profile){

document.getElementById("dashName").innerHTML = profile.name;

document.getElementById("dashEmail").innerHTML = profile.email;

document.getElementById("dashCourse").innerHTML = profile.course;

document.getElementById("dashCollege").innerHTML = profile.college;

document.getElementById("dashYear").innerHTML = profile.year;

document.getElementById("dashCategory").innerHTML = profile.category;

document.getElementById("dashState").innerHTML = profile.state;

}
function loginUser(event){

event.preventDefault();


let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;


let user = JSON.parse(localStorage.getItem("user"));


if(user && user.email === email && user.password === password){

alert("Login Successful!");

window.location.href="dashboard.html";

}

else{

alert("Invalid Email or Password");

}

}

function toggleSave(button){

    let card = button.parentElement;
    let name = card.querySelector("h3").innerText;

    let saved = JSON.parse(localStorage.getItem("savedScholarships")) || [];

    if(button.innerHTML === "🤍"){

        button.innerHTML = "❤️";
        saved.push(name);

    } 
    else {

        button.innerHTML = "🤍";
        saved = saved.filter(item => item !== name);

    }

    localStorage.setItem("savedScholarships", JSON.stringify(saved));

}


   
function showSavedScholarships() {

    let savedList = document.getElementById("savedList");

    if (!savedList) return;

    let saved = JSON.parse(localStorage.getItem("savedScholarships")) || [];

    savedList.innerHTML = "";

    if (saved.length === 0) {
        savedList.innerHTML = "<li>No saved scholarships yet.</li>";
        return;
    }

    saved.forEach(function(scholarship){

        let li = document.createElement("li");

        li.innerHTML = `
            ${scholarship}
            <br>
            <a href="scholarship-details.html" class="details-btn">
                View Details
            </a>
        `;

        savedList.appendChild(li);

    });
}

let saved = JSON.parse(localStorage.getItem("savedScholarships")) || [];

let savedList = document.getElementById("savedList");

if(savedList){

savedList.innerHTML="";

saved.forEach(function(item){

savedList.innerHTML += `<li>⭐ ${item}</li>`;

});

}
function showDetails(name) {
    localStorage.setItem("selectedScholarship", name);
    window.location.href = "scholarship-details.html";
}