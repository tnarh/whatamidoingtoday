function generateSchedule(tasks, startDate) {
    const schedule = {};
    const daysInMilliseconds = 24 * 60 * 60 * 1000;
    
    for (let i = 0; i < tasks.length; i++) {
        const currentDate = new Date(startDate.getTime() + i * daysInMilliseconds);
        const formattedDate = currentDate.toISOString().split('T')[0];
        const taskInfo = {
            name: tasks[i][0],
            backgroundColor: tasks[i][1],
            textColor: tasks[i][2]
        };
        schedule[formattedDate] = taskInfo;
    }
    
    return schedule;
}

const tasksList = [
    ['2 days left', 'white', 'black'],
    ['1 day left', 'white', 'black'],
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Practice', 'green', 'white'],
    ['New Year Holidays', '#D3D3D3', 'black'], // LightGray
    ['New Year Holidays', '#D3D3D3', 'black'], // LightGray
    ['New Year Holidays', '#D3D3D3', 'black'], // LightGray
    ['New Year Holidays', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Reserved', 'black', 'white'],
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Contests', '#FF4500', 'white'], // OrangeRed
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Contests', '#FF4500', 'white'], // OrangeRed
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Contests', '#FF4500', 'white'], // OrangeRed
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['2-Week Summary Test', '#FFE4C4', 'black'], // Bisque
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Day Off', '#D3D3D3', 'black'], // LightGray
    ['Exam', '#F08080', 'white'], // LightCoral
    ['Reserved', 'black', 'white'],
    ['Exam Review & Retake', '#FFB6C1', 'white'], // LightPink
    ['Events', '#FF4500', 'white'], // OrangeRed
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black'],
    ['Practice', 'green', 'white'],
    ['Assignments', '#4B0082', 'white'], // Indigo
    ['Lecture', '#6495ED', 'white'], // CornflowerBlue
    ['Reading', 'white', 'black']
];

const startDate = new Date('2023-12-03');
const generatedSchedule = generateSchedule(tasksList, startDate);

console.log(generatedSchedule);

// Get today's date
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

document.getElementById("date").innerHTML = formattedDate;

// Get the task information for today
const todayTaskInfo = generatedSchedule[formattedDate];

// Update HTML elements
if (todayTaskInfo) {
    document.getElementById("title").innerHTML = todayTaskInfo.name;
    document.body.style.backgroundColor = todayTaskInfo.backgroundColor;
    document.getElementById("title").style.color = todayTaskInfo.textColor;
} else {
    // Handle the case when there is no task scheduled for today
    document.getElementById("title").innerHTML = "No task scheduled for today";
    document.body.style.backgroundColor = 'white';
    document.getElementById("title").style.color = 'black';
}