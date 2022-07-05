let key = 'image'
let image = '';
// firebase bucket name
// REPLACE WITH THE ONE YOU CREATE
// ALSO CHECK STORAGE RULES IN FIREBASE CONSOLE
let fbBucketName = 'images';

// get elements
let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');

// listen for file selection
function upload(e) {

    // what happened
    console.log('file upload event', e);

    // get file
    let file = e.target.files[0];

    // create a storage ref
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    let uploadTask = storageRef.put(file);

    // The part below is largely copy-pasted from the 'Full Example' section from
    // https://firebase.google.com/docs/storage/web/upload-files

    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors</html>
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            // save this link somewhere, e.g. put it in an input field
            let downloadURL = uploadTask.snapshot.downloadURL;
            localStorage.setItem(key, downloadURL);
            // image = downloadURL;
            console.log('downloadURL ===>', image);
            let divLocation = document.getElementById("imgDiv");
            let imgElement = document.createElement("image");
            imgElement.src = downloadURL
            console.log('pic ==', image)
            divLocation.append(imgElement);
        });

}


// function displayImage(pic) {
//     console.log('goi ham pic')
//     console.log('pic tren', pic)
//     let divLocation = document.getElementById("imgDiv");
//     let imgElement = document.createElement("img");
//     imgElement.src = pic
//     console.log('pic ==', pic)
//     divLocation.append(imgElement);
// }
//
//
//
// displayImage(image);
