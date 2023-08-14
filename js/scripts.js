//functions/events to listen for the submit
// and put the input text into an array
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        //make empty array
        //set the inputs = to dom elements or .innerText
        //push the input text into the empty array
        event.preventDefault();

        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const input3 = document.getElementById("input3").value;

        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");

        let arr = [];
        arr.push(input1, input2, input3);
        console.log(arr[2]);

        let newArr = [];
        newArr.push(arr[1], arr[0], arr[2]);
        console.log(newArr);
        arr.push(li1);

        document.body.append(ul);

        ul.append(li1, li2, li3);
        li1.append(arr[1]);
        li2.append(arr[0]);
        li3.append(arr[2]);

    });
});
