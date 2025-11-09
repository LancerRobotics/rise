





const lessons = [
    { num: 0, file: 'code.html', title: 'Curriculum' },
    { num: 1, file: '2.1.html', title: 'What is idkasdjalsdkjalskdjalksdjalksd?' },
    { num: 2, file: '2.2.html', title: 'VEX IQ Kit Introduction' },
    { num: 3, file: '2.3.html', title: 'Basic Geometric Thinking and Reasoning' },
    { num: 4, file: '2.4.html', title: 'Introducing the Engineering and Design Process' },
    { num: 5, file: '2.5.html', title: 'Applying the EDP' },
    { num: 6, file: '2.6.html', title: 'Getting Started: Robot Soccer' },
    { num: 7, file: '2.7.html', title: 'The Importance of Documentation' },
    { num: 8, file: '2.8.html', title: 'Making Data-Driven Decisions' },
    { num: 9, file: '2.9.html', title: 'Building and Documenting Conjoined' },
    { num: 10, file: '2.10.html', title: 'Manipulators and Intakes' },
    { num: 11, file: '2.11.html', title: 'Developing Designs' },
    { num: 12, file: '2.12.html', title: 'Work Day' },
    { num: 13, file: '2.13.html', title: 'The Importance of Field Testing' },
    { num: 14, file: '2.14.html', title: 'Work Day' },
    { num: 15, file: '2.15.html', title: 'Work Day' },
    { num: 16, file: '2.16.html', title: 'Competition Day' },
    { num: 17, file: '2.17.html', title: 'Making Real World Connections' },
    { num: 18, file: '2.18.html', title: 'Work Day for Engineering Poster' },
    { num: 19, file: '2.19.html', title: 'Disassembling the Claw, Poster Presentation Day' },
    { num: 20, file: '2.20.html', title: 'Starting a Bigger Challenge' },
    { num: 21, file: '2.21.html', title: 'Refining Operator Input' },
    { num: 22, file: '2.22.html', title: 'Multi-Function Driving' },
    { num: 23, file: '2.23.html', title: 'Tug of War' },
    { num: 24, file: '2.24.html', title: 'Developing a Manipulator' },
    { num: 25, file: '2.25.html', title: 'Work Day' },
    { num: 26, file: '2.26.html', title: 'Work Day' },
    { num: 27, file: '2.27.html', title: 'Work Day' },
    { num: 28, file: '2.28.html', title: 'Reaching for the Sky' },
    { num: 29, file: '2.29.html', title: 'Work Day' },
    { num: 30, file: '2.30.html', title: 'Work Day' },
    { num: 31, file: '2.31.html', title: 'Work Day' },
    { num: 32, file: '2.32.html', title: 'Competition Day' },
    { num: 33, file: '2.33.html', title: 'Making More Real World Connections' },
    { num: 34, file: '2.34.html', title: 'Work Day' },
    { num: 35, file: '2.35.html', title: 'Disassembly and Looking Forward' }
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