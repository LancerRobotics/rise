
document.addEventListener('DOMContentLoaded', function() {
    const currentFile = window.location.pathname.split('/').pop();
    
    const activeLesson = document.querySelector('.lesson-list li.active');
    
    if (activeLesson) {
        const courseOutline = document.querySelector('.course-outline');
        
        const activeLessonTop = activeLesson.offsetTop;
        const courseOutlineHeight = courseOutline.clientHeight;
        const activeLessonHeight = activeLesson.clientHeight;
        
        courseOutline.scrollTop = activeLessonTop - (courseOutlineHeight / 2) + (activeLessonHeight / 2);
    }
});
