const lessons = [
    { num: 0, file: 'curriculum.html', title: 'Curriculum' },
    { num: 1, file: '1.1.html', title: 'What is Robotics?' },
    { num: 2, file: '1.2.html', title: 'VEX IQ Kit Introduction' },
    { num: 3, file: '1.3.html', title: 'Basic Geometric Thinking and Reasoning' },
    { num: 4, file: '1.4.html', title: 'Introducing the Engineering and Design Process' },
    { num: 5, file: '1.5.html', title: 'Applying the EDP' },
    { num: 6, file: '1.6.html', title: 'Getting Started: Robot Soccer' },
    { num: 7, file: '1.7.html', title: 'The Importance of Documentation' },
    { num: 8, file: '1.8.html', title: 'Making Data-Driven Decisions' },
    { num: 9, file: '1.9.html', title: 'Building and Documenting Conjoined' },
    { num: 10, file: '1.10.html', title: 'Manipulators and Intakes' },
    { num: 11, file: '1.11.html', title: 'Developing Designs' },
    { num: 12, file: '1.12.html', title: 'Work Day' },
    { num: 13, file: '1.13.html', title: 'The Importance of Field Testing' },
    { num: 14, file: '1.14.html', title: 'Work Day' },
    { num: 15, file: '1.15.html', title: 'Work Day' },
    { num: 16, file: '1.16.html', title: 'Competition Day' },
    { num: 17, file: '1.17.html', title: 'Making Real World Connections' },
    { num: 18, file: '1.18.html', title: 'Work Day for Engineering Poster' },
    { num: 19, file: '1.19.html', title: 'Disassembling the Claw, Poster Presentation Day' },
    { num: 20, file: '1.20.html', title: 'Starting a Bigger Challenge' },
    { num: 21, file: '1.21.html', title: 'Refining Operator Input' },
    { num: 22, file: '1.22.html', title: 'Multi-Function Driving' },
    { num: 23, file: '1.23.html', title: 'Tug of War' },
    { num: 24, file: '1.24.html', title: 'Developing a Manipulator' },
    { num: 25, file: '1.25.html', title: 'Work Day' },
    { num: 26, file: '1.26.html', title: 'Work Day' },
    { num: 27, file: '1.27.html', title: 'Work Day' },
    { num: 28, file: '1.28.html', title: 'Reaching for the Sky' },
    { num: 29, file: '1.29.html', title: 'Work Day' },
    { num: 30, file: '1.30.html', title: 'Work Day' },
    { num: 31, file: '1.31.html', title: 'Work Day' },
    { num: 32, file: '1.32.html', title: 'Competition Day' },
    { num: 33, file: '1.33.html', title: 'Making More Real World Connections' },
    { num: 34, file: '1.34.html', title: 'Work Day' },
    { num: 35, file: '1.35.html', title: 'Disassembly and Looking Forward' }
  ];

const currentFile = window.location.pathname.split('/').pop();

let sidebarHTML = '<h3>Robotics</h3><ul class="lesson-list">';
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