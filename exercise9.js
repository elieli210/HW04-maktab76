/* Write a JavaScript function to hide email addresses to protect
from unauthorized users.
Test Data:
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com" */

function protect_email (user_email) {
    let avg=0;
    let splitted, part1, part2;
    splitted = user_email.split("@");part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
return part1 + "...@" + part2;
}

console.log(protect_email("robin_singh@example.com"));