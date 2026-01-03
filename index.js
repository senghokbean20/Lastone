const items ={
    item1: [
        "https://www.vivacemusic.com.au/wp-content/uploads/2022/05/K240S.jpg",
        "HEADPHONE",
        "99.99$",
        "Headphones are personal listening devices used to monitor audio privately. In a musical context"
    ],
    item2: [
        "https://jollymusic.com.ph/cdn/shop/files/JMPICKSETSURPRISE7.jpg?v=1692783233&width=533",
        "KEY GUITAR",
        "7.99$",
        "he keytar is a lightweight synthesizer or MIDI controller that is held like a guitar, supported by a strap around the neck"
    ],
    item3: [
        "https://b1356846.smushcdn.com/1356846/wp-content/uploads/2019/07/TB2vXKhaaigSKJjSsppXXabnpXa_13502512-300x300.jpg?lossy=0&strip=1&webp=1",
        "CAPO",
        "10.99$",
        "A capo (short for capotasto) is a small mechanical device that clamps onto the neck of a guitar"
    ],
    item4: [
        "https://www.artiesmusic.com.au/assets/thumbL/0374048502.png?20251124194110",
        "GUITAR SOLO",
        "59.99$",
        "A guitar solo is a musical passage where the guitarist becomes the lead voice, stepping out from the background."
    ],
};


const rowCard = document.getElementById("rowCard");
console.log(rowCard);
rowCard.innerHTML="";
const keys = Object.keys(items);
for(let i =0; i< keys.length; i++){
    rowCard.innerHTML +=
    `<div style="width: 300px; height: 600px; margin-left: 40px;  "
          class="card col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 shadow-lg "
    >
        <div style="width: 100%; height: 40%;"
        class="card-img d-flex justify-content-center shadow-lg mt-3"
    >
        <img style="width: 80%; height: 80%;" 
            src="${items[keys[i]][0]}" 
            alt="">
        

    </div>
        <div style="width: 100%; height: 40%; " class="card-body">
            <h3 style="font-family: serif; font-weight: bold; font-size:25px; margin-top:-30px;  " class="text-center mt-2">${items[keys[i]][1]}</h3>
                <h3 style="font-size:20px;" class="text-center mt-1">${items[keys[i]][2]}</h3>
                <p style="font-family: serif; font-weight: bold; font-size: 12px; " class="text-center px-3">${items[keys[i]][3]}</p>
            
        </div>
        <div style="width: 100%; height: 20%; " class="card-footer">
            <button style="width: 100%; height: 100%;" class="btn btn-outline-success">VIEW</button>
        </div>
    </div>`;
}

