// Upload form handling
document.getElementById('upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const videoFile = document.getElementById('video-file').files[0];
    const videoTitle = document.getElementById('video-title').value;
    // TO DO: handle video upload
    document.getElementById('upload-status').innerHTML = `Uploading ${videoTitle}...`;
});

// Video gallery handling
fetch('uploads/') // TO DO: fetch uploaded videos
    .then(response => response.json())
    .then(data => {
        const videoGallery = document.getElementById('video-gallery');
        data.forEach((video) => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <video width="100%" height="150" controls>
                    <source src="${video.url}" type="video/mp4">
                </video>
                <h4>${video.title}</h4>
            `;
           
