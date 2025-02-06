document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { name: "Web Development", link: "web-dev.html" },
        { name: "Data Science", link: "data-science.html" },
        { name: "Cloud Computing", link: "cloud.html" }
    ];

    let courseList = document.getElementById("course-list");
    courses.forEach(course => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${course.link}">${course.name}</a>`;
        courseList.appendChild(li);
    });
});
