var arr = [10,20,9,2,21,12];
arr.length = 0;
var algorithm = null, delay = 1000;
let computer = document.getElementById('computer');

document.onload = function() {
    if(arr.length === 0) {
        document.getElementsByClassName('array-box')[0].innerHTML = "<p id='empty-msg'>Array Empty</p>";
    }
}

function pushArray() {
    var number = document.getElementById('inputs').value;
    if(number === '')
        alert('No Value! Please enter a value');
    else {
        addElement(number);
        arr.push(parseInt(number));
    }
}

function popArray() {
    if(arr.length == 0)
        alert("Array Empty! Unable to pop");
    else
        removeElement();
}

// Test function
function Draw() {
    document.getElementsByClassName('array-box')[0].innerHTML = "";
    for(let i=0;i<arr.length; i++) {
        addElement(arr[i]);
    }
}

function addElement(num) {
    var div = document.createElement("DIV");
    div.setAttribute('id',num);
    div.classList.add('array-element');
    div.innerHTML = num;

    var arrayBox = document.getElementsByClassName('array-box')[0];
    if(arr.length == 0)
        arrayBox.innerHTML = "";
    
    arrayBox.appendChild(div);
}

function removeElement() {
    if(arr.length === 1) {
        document.getElementById(arr.pop()).parentNode.innerHTML = "<p>Array Empty</p>"
    }
    else 
        document.getElementById(arr.pop()).outerHTML = "";
}

function sort(event) {
    if(event.id == algorithm) {
        document.getElementById(algorithm).style.backgroundColor = "white";
        document.getElementById(algorithm).style.color = "black";
        algorithm = null;
    }
    else {
        if(algorithm !== null) {
            document.getElementById(algorithm).style.backgroundColor = "white";
            document.getElementById(algorithm).style.color = "black";
        }
        algorithm = event.id;
        document.getElementById(event.id).style.backgroundColor = "green";
        document.getElementById(event.id).style.color = "white";
    }
}

function algorithmSelection() {    
    Draw();
    reset();
    
    // Select Algorithm
    if(arr.length == 0 )
        alert("Array Empty! Unable to Sort");
    else if(arr.length == 1) 
        alert("Cannot Sort! Add more elements");
    else if(algorithm == null)
        alert("Select an Algorithm!"); 
    else {
        computer.style.display = "block";
        if(algorithm == "insertion") {
            ip1 = 1;
            setTimeout(()=> {
                updateComputer("<b>INSERTION SORT</b><br>================= <br><br>");
            },500)
            insertionSort();
        }
        else if(algorithm == "selection") 
            selectionSort();
        else if(algorithm == "quick") 
            quickSort();
    }
}

// Function for Insertion Sort
let ip1, i2p2, ikey;
function insertionSort() {
    if(ip1 < arr.length) {
        ikey = arr[ip1];
        var stmt = document.getElementById('stmt');
        stmt.innerHTML = "Key = "+ikey;
        document.getElementById(ikey).innerHTML = "";
        setTimeout(() => {
            updateComputer("Set "+ ikey + " as key<br>");
            setTimeout(() => {
                updateComputer("Shift all elements greater than " + ikey+" to Right<br>");
            }, 500);
        },500);
        ip2 = ip1-1;
        setTimeout(function() {
            subSort();
        }, delay);
    }
    else 
        updateComputer("INSERTION SORT COMPLETE!");   
}

function subSort() {
    if(ip2>=0 && arr[ip2]>ikey)
    {
        setTimeout(function() {
            iSwap(ip2, ip2+1);
            let t = arr[ip2+1];
            arr[ip2+1] = arr[ip2];
            arr[ip2] = t;
            ip2--;
            subSort();
        },delay);
    }
    else {
        setTimeout(function() {
            updateComputer("No more Elements greater than "+ikey+"<br>");
            document.getElementById('stmt').innerHTML += "(Insert into space)";
            setTimeout(() => {
                updateComputer("Insert "+ikey+" to the space<br>");
            }, 500);
            let e1 = document.getElementById(arr[ip2+1]);
            e1.style.transform = "scale(1.2)";
            e1.style.border = "3px solid red";
            e1.innerHTML = ikey;
            setTimeout(function() {
                e1.style.border = "2px solid blueviolet";
                e1.style.transform = "scale(1)";
            }, 500);

            arr[ip2+1] = ikey;
            ip1++;
            setTimeout(function() {
                updateComputer("------------<br><br>");
                insertionSort();
            },delay);
        }, delay);
    }
}
function iSwap(i, j) {
    var ele1 = document.getElementById(arr[i]),
        ele2 = document.getElementById(arr[j]);
    let t = ele1.id, x=ele2.innerHTML;
    ele1.id = "";
    ele1.id = ele2.id;
    ele2.id = t;

    ele1.style.transform = ele2.style.transform = "scale(1.2)";
    ele1.style.border = ele2.style.border = "3px solid green";
    ele2.innerHTML = ele1.innerHTML;
    ele1.innerHTML = "";
    
    setTimeout(function() {
        ele1.style.transform = ele2.style.transform = "scale(1)";
        ele1.style.border = ele2.style.border = "2px solid blueviolet";
    },600);
}

// Function for Selection Sort 
function selectionSort() {
    console.log("Selection Sort");
}

// Function for Quick Sort
function quickSort() {
    console.log("Quick Sort");
}

// Scroll bar updater function
function updateComputer(string) {
    computer.innerHTML += string;
    computer.scrollTop = computer.scrollHeight;
}

function reset() {
    ip1 = undefined;
    ip2 = undefined;
    key = undefined;
    computer.innerHTML = "";
}