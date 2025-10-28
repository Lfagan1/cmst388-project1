document.addEventListener('DOMContentLoaded', () => {
    
    // ============================
    // PART 1: INTRO TEXT
    // ============================
    
    // Declare 3 constant variables for name, age and isStudent
    const name = "Lauren";
    const age = 41;
    const isStudent = true;

    const introduction = (name, age, isStudent) => {
        // TODO: Check if isStudent is true or false and set text output to a new variable called studentStatus
        let studentStatus;
        if (isStudent) {
            studentStatus = "I am currently a student.";
        } else {
            studentStatus = "I am not currently a student.";
        }

        // TODO: Using string concatenation, store a message to a new variable called message
        const message = "Hello, my name is " + name + ". I am " + age + " years old and " + studentStatus;

        // DO NOT CHANGE BELOW
        const messageDisplayArea = document.getElementById('messageDisplayArea');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageDisplayArea.appendChild(messageElement);
    };
    

    // ============================
    // PART 2: SELECTORS
    // ============================

    document.querySelector("#add-classes").addEventListener('click', () => {
        document.querySelector('.selector-examples li:first-child').classList.add('first');
        document.querySelectorAll('.selector-examples li:nth-child(odd)').forEach(el => el.classList.add('odd'));
        
        // TODO: Add remaining selectors using nth-child, loops and conditional logic where appropriate
        // Add class 'highlighter' to 4th and 5th list items
        document.querySelector('.selector-examples li:nth-child(4)').classList.add('highlighter');
        document.querySelector('.selector-examples li:nth-child(5)').classList.add('highlighter');
        
        // Add class 'last' to the final item in the list
        document.querySelector('.selector-examples li:last-child').classList.add('last');
    });


    // ============================
    // PART 3: REPLACEMENT TEXT
    // ============================

    document.querySelector("#change-language").addEventListener('click', () => {
        // TODO: Add code to change the text of the currentLanguage class to the value of the newLanguage ID
        const inputValue = document.querySelector('#newLanguage').value;
        const element = document.querySelector('.currentLanguage');
        element.innerHTML = inputValue;
    });


    // ============================
    // PART 4: TOGGLES
    // ============================

    // Toggles Part 1: Modifying CSS attributes
    let boxColor = "rgb(153, 51, 51)";

    document.querySelector("#button_toggle_colors").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            const currentColor = window.getComputedStyle(box).backgroundColor;
            if (currentColor === boxColor) {
                // element backgroundColor currently has boxColor set, change it to 'white'
                box.style.backgroundColor = 'white';
            } else {
                // element backgroundColor currently does not have boxColor set, set it to boxColor
                box.style.backgroundColor = boxColor;
            }
        });
    });

    // Toggles Part 2: Adding/Removing classes to manipulate shapes
    document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            // Add a toggle to box.classList and toggle the CSS 'round-edge' class
            box.classList.toggle('round-edge');
        });
    });


    // ============================
    // DO NOT CHANGE
    // ============================

    // Call the introduction function
    introduction(name, age, isStudent);
});
