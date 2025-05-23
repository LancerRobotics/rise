
document.addEventListener('DOMContentLoaded', function() {
    // Get the current file name (e.g., "1.1.html")
    const currentFile = window.location.pathname.split('/').pop();
    
    // Find the active lesson in the list
    const activeLesson = document.querySelector('.lesson-list li.active');
    
    if (activeLesson) {
        // Get the course outline container
        const courseOutline = document.querySelector('.course-outline');
        
        // Calculate the scroll position to center the active lesson
        const activeLessonTop = activeLesson.offsetTop;
        const courseOutlineHeight = courseOutline.clientHeight;
        const activeLessonHeight = activeLesson.clientHeight;
        
        // Scroll to center the active lesson
        courseOutline.scrollTop = activeLessonTop - (courseOutlineHeight / 2) + (activeLessonHeight / 2);
    }
});
