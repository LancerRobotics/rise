const lessons = [
    { num: 0,  file: 'code.html',   title: 'Code Curriculum' },
    { num: 1,  file: '2.1.html',    title: 'What is Programming?' },
    { num: 2,  file: '2.2.html',    title: 'VEX IQ Kit Introduction' },
    { num: 3,  file: '2.3.html',    title: 'Basic Programming Concepts' },
    { num: 4,  file: '2.4.html',    title: 'Sequencing and Movement' },
    { num: 5,  file: '2.5.html',    title: 'Loops and Repetition' },
    { num: 6,  file: '2.6.html',    title: 'Events and Conditional Logic' },
    { num: 7,  file: '2.7.html',    title: 'Variables and Sensors' },
    { num: 8,  file: '2.8.html',    title: 'Loops' },
    { num: 8.5,  file: '2.8.5.html',    title: 'Nested Loops' },
    { num: 9,  file: '2.9.html',    title: 'Arm and Claw Movement' },
    { num: 10, file: '2.10.html',   title: 'Combining Movements' },
    { num: 11, file: '2.11.html',   title: 'Programming for Precision' },
    { num: 12, file: '2.12.html',   title: 'Debugging and Testing' },
    { num: 13, file: '2.13.html',   title: 'Work Day: Project Progress' },
    { num: 14, file: '2.14.html',   title: 'Autonomous Challenges' },
    { num: 15, file: '2.15.html',   title: 'Functions and Modular Code' },
    { num: 16, file: '2.16.html',   title: 'Competition Prep' },
    { num: 17, file: '2.17.html',   title: 'Field Testing and Data Logging' },
    { num: 18, file: '2.18.html',   title: 'Project Documentation' },
    { num: 29, file: '2.19.html',   title: 'Final Challenge: Design + Code' },
    { num: 20, file: '2.20.html',   title: 'Reflection and Presentation' },
    { num: 21, file: '2.21.html',   title: 'Advanced Sensor Control' },
    { num: 22, file: '2.22.html',   title: 'Programming with Functions' },
    { num: 23, file: '2.23.html',   title: 'Capstone Challenge and Reflection' }
  ];

const currentFile = window.location.pathname.split('/').pop();

let sidebarHTML = '<h3>Code Curriculum</h3><ul class="lesson-list">';
lessons.forEach(lesson => {
const activeClass = lesson.file === currentFile ? 'active' : '';
sidebarHTML += `
    <li class="${activeClass}" onclick="window.location.href='${lesson.file}'">
    <span class="lesson-number">${lesson.num}</span>
    <span class="lesson-title">${lesson.title}</span>
    </li>
`;
});
sidebarHTML += '</ul>';

document.getElementById('sidebar').innerHTML = sidebarHTML;