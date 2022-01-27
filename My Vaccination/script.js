let centers = [];
const cards = document.querySelector(".cards");
const searchBtn = document.querySelector(".searchBox").querySelector("button");

let today, d, m, y;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
y = today.getFullYear();
today = `${d}-${m}-${y}`;

function cowinData(pincode) {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      
      if(data.sessions !== []){
        data.sessions.map((e, i) => {
          let centerInfo = [
            e.name,
            e.address,
            e.to, e.from,
            e.vaccine,
           
            e.min_age_limit,
            e.available_capacity,
            e.fee_type
           
          ];
          centers.push(centerInfo);
          let code = `
          <div class="container">
        <div class="text">
        <div class="icons">
            <ul>
                <li><i class="fas fa-plus-square" style="color: green;"></i></li>
                <li><i class="fas fa-map-marker-alt" style="color: red;"></i></li>
                <li> <i class="fas fa-clock" style="color: skyblue;"></i></li>
                <li><i class="fas fa-eye-dropper" style="color:red"></i></li>
            </ul>

        </div>
        <div class="c1">

            <ul>
                <li>Center Name</li>
                <li>Center Location</li>
                <li>Center Timing</li>
                <li>Vaccine Name</li>
            </ul>
        </div>
        <div class="c2">
            <ul>
                <li>${centers[i][0]}</li>
                <li>${centers[i][1]}</li>
                <li>${centers[i][3]} to ${centers[i][2]}</li>
                <li>${centers[i][4]}</li>
            </ul>
        </div>
        </div>

        <div class="c3">
            <span>Age Limit</span>
            <span>Avalibility</span>
            <span>Fees</span>
        </div>
        <div class="c3">
        <span>${centers[i][5]}</span>
        <span>${centers[i][6]}</span>
        <span>${centers[i][7]}</span>
        </div>
        
    </div>`;
          cards.innerHTML += code;
        });
        // console.log(data.sessions.length);
        if(data.sessions.length === 0){
          alert("No Vaccinations Available")
        }
        centers = []
      } 


    } else{
        alert("Some error occured")
    }
  };

  xhr.send();
}

const input = document.querySelector("#input")
input.addEventListener("keypress", (e) => {
    if (e.which === 13) {
        let pincode = input.value;
        cards.innerHTML = "";
        if (pincode === "") {
            alert("Enter pincode in the search box")
        } else if (pincode !== "") {
            cowinData(pincode)
        }
}})

searchBtn.addEventListener("click",() => {
        let pincode = input.value;
        cards.innerHTML = "";
        if (pincode === "") {
            alert("Enter pincode in the search box")
        } else if (pincode !== "") {
            cowinData(pincode)
        }
})

// cowinData(110001);
// cowinData(462030);
