const lessons = [
    { num: 0,  file: 'code.html',   title: 'Code Curriculum Overview' },
    { num: 1,  file: '2.1.html',    title: 'What is Programming?' },
    { num: 2,  file: '2.2.html',    title: 'VEX IQ Blocks Overview' },
    { num: 3,  file: '2.3.html',    title: 'Importance of Pseudocode' },
    { num: 4,  file: '2.4.html',    title: 'Simple Movements' },
    { num: 5,  file: '2.5.html',    title: 'Wait and Timing' },
    { num: 6,  file: '2.6.html',    title: 'Sensors' },
    { num: 7,  file: '2.7.html',    title: 'Conditional Statements' },
    { num: 8,  file: '2.8.html',    title: 'Loops' },
    { num: 8.5,  file: '2.8.5.html',    title: 'Nested Loops' },
    { num: 9,  file: '2.9.html',    title: 'Dance Routine Project' },
    { num: 10, file: '2.10.html',   title: 'Variables and Storing Information' },
    { num: 11, file: '2.11.html',   title: 'MyBlocks and Functions' },
    { num: 12, file: '2.12.html',   title: 'Debugging' },
    { num: 13, file: '2.13.html',   title: 'Exploration Day' },
    { num: 14, file: '2.14.html',   title: 'Follow the Tape Challenge' },
    { num: 15, file: '2.15.html',   title: 'Work Day' },
    { num: 16, file: '2.16.html',   title: 'Test Day' },
    { num: 17, file: '2.17.html',   title: 'Extra Challenge' },
    { num: 18, file: '2.18.html',   title: 'Work Day' },
    { num: 19, file: '2.19.html',   title: 'Work Day' },
    { num: 20, file: '2.20.html',   title: 'Test and Competition Day' },
//    { num: 21, file: '2.21.html',   title: 'Advanced Sensor Control' },
//    { num: 22, file: '2.22.html',   title: 'Programming with Functions' },
//    { num: 23, file: '2.23.html',   title: 'Capstone Challenge and Reflection' }
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