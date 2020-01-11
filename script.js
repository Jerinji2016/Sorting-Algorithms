var arr = [10,20,9,2,21,12];
// arr.length = 0;
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
    // Select Algorithm
    if(arr.length == 0 )
        alert("Array Empty! Unable to Sort");
    else if(arr.length == 1) 
        alert("Cannot Sort! Add more elements");
    else if(algorithm == null)
        alert("Select an Algorithm!"); 
    else {
        Draw();
        reset();
        computer.style.display = "block";
        if(algorithm == "insertion") {
            ip1 = 1;
            setTimeout(()=> {
                updateComputer("<b>INSERTION SORT</b><br>================= <br><br>");
            },500);
            insertionSort();
        }
        else if(algorithm == "selection") {
            sp1 = 0;
            var stmt = document.getElementById('stmt');
            let newDiv = document.createElement("DIV");
            newDiv.setAttribute("id", "skey");
            stmt.appendChild(newDiv);
            newDiv = null;
            newDiv = document.createElement("DIV");
            newDiv.setAttribute("id", "min-val");
            stmt.appendChild(newDiv);
            console.log(stmt);
            setTimeout(function() {
                updateComputer("<b>SELECTION SORT</b><br>================= <br><br>");
            },500);
            selectionSort();
        }
        else if(algorithm == "bubble") {
            bp1 = 0;
            setTimeout(function() {
                updateComputer("<b>BUBBLE SORT</b><br>================= <br><br>");
            },500);
            bubbleSort();
        }
    }
}

// Functions for Insertion Sort
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
            isubSort();
        }, delay);
    }
    else 
        updateComputer("INSERTION SORT COMPLETE!");   
}

function isubSort() {
    if(ip2>=0 && arr[ip2]>ikey)
    {
        setTimeout(function() {
            iSwap(ip2, ip2+1);
            let t = arr[ip2+1];
            arr[ip2+1] = arr[ip2];
            arr[ip2] = t;
            ip2--;
            isubSort();
        },delay);
    }
    else {
        setTimeout(function() {
            updateComputer("No more Elements greater than "+ikey+"<br>");
            document.getElementById('stmt').innerHTML += "(Insert into space)";
            setTimeout(() => {
                updateComputer("<br>Insert "+ikey+" to the space<br>");
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
                updateComputer("-----Pass " + ip1 + "Complete-----<br><br>");
                insertionSort();
            },delay);
        }, delay);
    }
}
function iSwap(i, j) {       
    //Swap HTML Elements (Insertion Sort)
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

// Functions for Selection Sort 
let sp1, sp2, smin;
function selectionSort() {
        if(sp1 < arr.length-1) {
        setTimeout(function() {
            document.getElementById('skey').innerHTML = "Key = " + arr[sp1];
            document.getElementById('min-val').innerHTML = "Min-Value = " + null;
            updateComputer("Set " + arr[sp1] + " as Key<br>");
            setTimeout(function() {
                updateComputer("Check any other element less than "+ arr[sp1]+"<br>");
                smin = sp1;
                sp2=sp1+1;
                setTimeout(function() {
                    updateComputer("Set " + arr[smin] + " as Min-Value<br>");
                    setTimeout(function() {
                        ssubSort();
                    }, delay);
                }, 500);
            }, 500);
        },500);
    }
    else
        updateComputer("SELECTION SORT COMPLETE!");
}

function ssubSort() {
    if(sp2<arr.length) {
        if(arr[sp2] < arr[smin]) {
            setTimeout(function() {
                updateComputer("=> " + arr[sp2] + " is less than " + arr[smin] + "<br>");
                setTimeout(function() {
                    updateComputer("&nbsp;&nbsp; Set " + arr[sp2] + " as Min-Value<br>");
                },500);
                smin = sp2;
                document.getElementById('min-val').innerHTML = "Min-Value = " + arr[smin];
                setTimeout(function() {
                    sp2++;
                    ssubSort();
                }, delay);
            },500);
        }
        else {
            setTimeout(function() {
                sp2++;
                ssubSort();
            }, delay);
        }
    }
    else {
        setTimeout(function() {
            updateComputer("<br>Final Min-Value = " + arr[smin] + "<br>");
            setTimeout(function() {
                updateComputer("Swap Key & Min-Value <br>");
                updateComputer("i.e., Swap("+ arr[sp1] +", " + arr[smin] + ")<br>");
                sSwap(arr[sp1], arr[smin]);
                let temp = arr[sp1];
                arr[sp1] = arr[smin]; 
                arr[smin] = temp;
                sp1++;
                setTimeout(function() {
                    updateComputer("<br>----Pass " + sp1 + " Complete----<br><br>");
                    setTimeout(function() {
                        selectionSort();
                    }, delay);
                }, 500);
            }, 200);
        });
    }
}
function sSwap(i, j) {
    // Swap HTML Elements (Selection Sort)
    let ele1 = document.getElementById(i),
        ele2 = document.getElementById(j),
        temp = ele1.innerHTML, t = ele1.id;
    ele1.style.transform = ele2.style.transform = "scale(1.2)";
    ele1.style.border = ele2.style.border = "3px solid green";

    setTimeout(function() {
        ele1.style.border = ele2.style.border = "2px solid blueviolet";
        ele1.style.transform = ele2.style.transform = "scale(1)";
        ele1.innerHTML = ele2.innerHTML;
        ele2.innerHTML = temp;
    }, 600);
    ele1.id = "";
    ele1.id = ele2.id;
    ele2.id = t;
}

// Functions for Bubble Sort
let bp1, bp2;
function bubbleSort() { 
    if(bp1<(arr.length-1)) {
        setTimeout(function() {
            bp2 = 0;
            bsubSort();
        }, delay);
    }
    else {
        console.log("SORT COMPLETE");
    }
}

function bsubSort() {
    if(bp2<(arr.length-bp1-1)) {
        console.log(arr);
        if(arr[bp2] > arr[bp2+1]) {
            arr[bp2] += arr[bp2+1];
            arr[bp2+1] = arr[bp2] - arr[bp2+1];
            arr[bp2] -= arr[bp2+1];
            setTimeout(function() {
                bp2++;
                bsubSort();
            }, delay);
        }
        else {
            setTimeout(function() {
                bp2++;
                bsubSort();
            }, delay);
        }
    }
    else {
        setTimeout(function() {
            bp1++;
            bubbleSort();
        }, delay);
    }
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
    document.getElementById('stmt').innerHTML = '';
}