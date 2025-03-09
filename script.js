// Login/Signup Form Handling
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login functionality will be added later.');
});

document.getElementById('signupLink')?.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Signup functionality will be added later.');
});

// Practice Exercise Logic
function runCode() {
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');
    const hintElement = document.getElementById('hint');
    const chancesElement = document.getElementById('chances');

    // Expected correct code
    const correctCode = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Abu Turab";
    return 0;
}`;

    // Check for errors
    const errors = checkForErrors(code);

    if (errors.length > 0) {
        chancesLeft--;
        if (chancesLeft > 0) {
            outputElement.textContent = errors.join('\n');
            outputElement.classList.add('error');
            outputElement.classList.remove('success');
            hintElement.textContent = 'Hint: Use `cout` to print the message. Example: `cout << "Hello, Abu Turab";`';
            chancesElement.textContent = `Chances left: ${chancesLeft}`;
        } else {
            outputElement.textContent = 'Hello, your name is Abu Turab';
            outputElement.classList.remove('error');
            outputElement.classList.add('success');
            hintElement.textContent = 'You have used all your chances. Here\'s a special message for you!';
            chancesElement.textContent = 'Chances left: 0';
            document.getElementById('code').disabled = true;
            document.querySelector('button').disabled = true;
        }
    } else if (code.trim() === correctCode.trim()) {
        outputElement.textContent = 'Hello, Abu Turab';
        outputElement.classList.remove('error');
        outputElement.classList.add('success');
        hintElement.textContent = 'Great job! Your code is correct.';
        chancesElement.textContent = `Chances left: ${chancesLeft}`;
    } else {
        chancesLeft--;
        if (chancesLeft > 0) {
            outputElement.textContent = 'Error: Your code is incorrect. Please check the hint.';
            outputElement.classList.add('error');
            outputElement.classList.remove('success');
            hintElement.textContent = 'Hint: Use `cout` to print the message. Example: `cout << "Hello, Abu Turab";`';
            chancesElement.textContent = `Chances left: ${chancesLeft}`;
        } else {
            outputElement.textContent = 'Hello, your name is Abu Turab';
            outputElement.classList.remove('error');
            outputElement.classList.add('success');
            hintElement.textContent = 'You have used all your chances. Here\'s a special message for you!';
            chancesElement.textContent = 'Chances left: 0';
            document.getElementById('code').disabled = true;
            document.querySelector('button').disabled = true;
        }
    }
}

// Function to check for errors in the code
function checkForErrors(code) {
    const requiredParts = [
        '#include <iostream>',
        'using namespace std;',
        'int main()',
        'cout <<',
        'return 0;'
    ];

    const errors = [];

    // Check for missing parts
    requiredParts.forEach(part => {
        if (!code.includes(part)) {
            errors.push(`Error: Missing "${part}"`);
        }
    });

    // Check for semicolons
    const lines = code.split('\n');
    lines.forEach((line, index) => {
        if (line.trim() && !line.trim().endsWith(';') && !line.includes('{') && !line.includes('}')) {
            errors.push(`Error: Missing semicolon at line ${index + 1}`);
        }
    });

    return errors;
}

// Initialize chances
let chancesLeft = 5;