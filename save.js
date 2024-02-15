//JS for save

function generate() {
    window.location.href = "save2.html";
}

//the check function - display the results
function check() {
    document.getElementById("result").style.display = 'block';
    var x = document.getElementById("password").value;
    var y = check2(x);

    document.getElementById("song").innerHTML = y.label;
    document.getElementById("number").innerHTML = y.strength;
    document.getElementById("explanation").innerHTML = check3(y);;
}

//check 2 - classify password
function check2(password) {
    const containsNumber = /[0-9]/.test(password);
    const containsLetter = /[a-zA-Z]/.test(password);
    const containsChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const containsSpace = /\s/.test(password);
    const containsCap = /[A-Z]/.test(password);

    var Common = isCommon(password);
    if ( Common[0] == "t" ) {
        document.getElementById("explanation").innerHTML = "'" + Common.substring(1) + "'";
        return {label: "Red Flags by Ruger", strength: 0};
    } else if (containsSpace) {
        return { label: "no space by Alextbh", strength: -1};
    } else if (password.length < 8 || password.length > 20) {
        return { label: "At My Weakest by James Arthur", strength: 1 };
    } else if (password.length >= 8 && password.length <= 20){
        
        //just characters
        if (containsChar && !containsLetter && !containsNumber) { 
            return { label: "At My Weakest by James Arthur", strength: 1 };
        } //just letters/numbers
        else if ( (containsLetter && !containsNumber && !containsChar) || (containsNumber && !containsLetter && !containsChar) ) { 
            return { label: "OK by the Wallows", strength: 2 };
        } //2 of the 3 criteria
        else if ( (containsLetter && containsChar && !containsNumber) || (containsNumber && containsChar && !containsLetter) || (containsNumber && !containsChar && containsLetter)) {
            return { label: "Good 4 U by Olivia Rodrigo", strength: 3 };
        }

        if (containsLetter && containsNumber && containsChar) {
            var inorder = true; 
            for (var i =0; i < password.length; i++) { //get the first char/number's index
                if ( !isNaN(password[i]) || (isNaN(password[i]) && !/[a-zA-Z]/.test(password[i])) ) break;
            }
            for (; i < password.length; i++) {
                if (/[a-zA-Z]/.test(password[i])) { //letter after? not in order
                    inorder = false; 
                    break;
                }
            }

            if (inorder && !containsCap) {// let then a char&/num
                return { label: "Stronger by Kanye West", strength: 4 };
            } else if (inorder && containsCap) {// let, char, num, cap
                return { label: "Unstoppable by Sia", strength: 5 };
            } else if (!inorder) {// random order of let, char, num
                return { label: "Unstoppable by Sia", strength: 5 };
            }
        }
    }
    
    
}

//check3 - process results
function check3(result) {
    switch (result.strength) {
        case -1:
            return "Your password seems to have a space. Please revise it for better security.";
        case 0:
            return "Your password includes one of the most common and least secure ones for passwords: " 
            + document.getElementById("explanation").innerHTML + ". Please revise it for better security";
        case 1:
            return "Your password length is not in the recommended range of 8 to 20 characters. Try adjusting the length.";
        case 2:
            return "Your password lacks a combination of letters, numbers, or special characters. Mix them up for better security.";
        case 3:
            return "Your password is good, but consider adding a special character or rearranging the order for more complexity.";
        case 4:
            return "Your password is strong! Consider making it even better by changing its order or adding a capital.";
        case 5:
            return "Your password is top-tier! You're doing great in creating a secure password.";
        default:
            return "Your password seems to have some issues. Please revise it & try again.";
    }
}

function isCommon(password) {
    //CAN BE REPLACED WITH TXT FILE
    const common = [
        "123456","123456789","12345","qwerty","password","12345678",
        "111111","123123","1234567890","1234567","qwerty123","000000",
        "1q2w3e","aa12345678","abc123","password1","1234","qwertyuiop",
        "123321","password123","1q2w3e4r5t","iloveyou","654321","666666",
        "987654321","123","123456a","qwe123","1q2w3e4r","7777777","1qaz2wsx",
        "123qwe","zxcvbnm","121212","asdasd","a123456","555555","dragon","112233",
        "123123123","monkey","11111111","qazwsx","159753","asdfghjkl","222222",
        "1234qwer","qwerty1","123654","123abc","asdfgh","777777","aaaaaa","myspace1",
        "88888888","fuckyou","123456789a","999999","888888","football","princess",
        "789456123","147258369","1111111","sunshine","michael","computer","qwer1234",
        "daniel","789456","11111","abcd1234","q1w2e3r4","shadow","159357","123456q",
        "1111","samsung","killer","asd123","superman","master","12345a","azerty",
        "love", "fuck", "ass", "sex", "soccer", "jessica", "pokemon", "welcome", "princess",
    ];

    for (const c of common) {
        if (password.toLowerCase().includes(c)) return "t" + c;
    }
    return "f";
}
