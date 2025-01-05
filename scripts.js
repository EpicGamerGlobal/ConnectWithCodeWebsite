document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        "\"This course is amazing! I learned so much in just a few weeks.\" - <strong>John Doe</strong>",
        "\"The instructors are very knowledgeable and friendly. Highly recommended!\" - <strong>Jane Smith</strong>",
        "\"Perfect for anyone looking to ace their AP CSA exam.\" - <strong>Emily Davis</strong>",
        "\"The DSA track helped me understand complex concepts easily.\" - <strong>Chris Lee</strong>",
        "\"A fun and interactive way to learn Java. My coding skills improved a lot!\" - <strong>Michael Brown</strong>"
    ];

    let currentReviewIndex = 0;
    const reviewElement = document.getElementById("review");

    setInterval(() => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        reviewElement.innerHTML = reviews[currentReviewIndex];
    }, 3000);
});
