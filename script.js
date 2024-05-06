// Function to generate HTML for "Hantar Aduan" form
// Function to generate HTML for "Hantar Aduan" form
function generateHantarAduanForm() {
    var hantarAduanFormHTML = `
         <div class="container mt-4">
         <h1>Hantar Aduan Anda</h1>
         <br>
         <div id="userInfoForm">
         <div class="form-group">
         <label for="name">Nama:</label>
         <input type="text" class="form-control" id="name" required>
       </div>
       <div class="form-group">
         <label for="company">Nama syarikat:</label>
         <input type="text" class="form-control" id="company" required>
       </div>
       <div class="form-group">
         <label for="issue">Tugasan:</label>
         <select class="form-control" id="issue">
           <option value="Photographer">Photographer</option>
           <option value="Videographer">Videographer</option>
           <option value="Photo Editor">Photo Editor</option>
           <option value="Video Editor">Video Editor</option>
           <option value="Lain-lain">Lain-lain</option>
         </select>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="instagram">Instagram:</label>
           <input type="text" class="form-control" id="instagram">
         </div>
         <div class="form-group col-md-6">
           <label for="facebook">Facebook:</label>
           <input type="text" class="form-control" id="facebook">
         </div>
       </div>
       <div class="form-group">
         <label for="phone">No Telefon:</label>
         <input type="tel" class="form-control" id="phone" required>
       </div>
       <div class="form-group">
         <label for="issue">Isu:</label>
         <select class="form-control" id="issue">
           <option value="Tiada bayaran dibuat">Tiada bayaran dibuat</option>
           <option value="Photographer/Videographer tidak hadir">Photographer/Videographer tidak hadir semasa majlis</option>
           <option value="Lain-lain">Gambar/video/album tidak diberi selepas majlis</option>
           <option value="Scammer">Scammer</option>
           <option value="Mencuri hasil kerja orang">Mencuri hasil kerja orang</option>
           <option value="Others">Others</option>
         </select>
       </div>
       <div class="form-group">
         <label for="note">Nota/Pesanan:</label>
         <textarea class="form-control" id="note"></textarea>
       </div>
       <div class="form-group">
         <label for="attachment">Lampiran (Jika ada):</label>
         <input type="file" class="form-control-file" id="attachment">
       </div>
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Hantar</button>
         </div>
         <div id="userInfoContainer"></div>
       </div>
       <br/>
       <br/>

       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sahkan Aduan Anda</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Aduan dibuat oleh (nama anda):</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Email:</label>
            <input type="text" class="form-control" id="recipient-email">
          </div>
          <div class="form-group">
          <label for="recipient-name" class="col-form-label">Facebook:</label>
          <input type="text" class="form-control" id="recipient-fb">
        </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
        <button type="button" class="btn btn-primary" id="submitModalBtn">Hantar Aduan</button>
      </div>
    </div>
  </div>
</div>

     `;

    // Add event listener to the "Hantar" button to show the modal
    var container = document.createElement('div');
    container.innerHTML = hantarAduanFormHTML;
   

    return container.innerHTML;
}





// Function to load the "Laman Utama" content
function loadLamanUtamaContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = `
        <h1>Selamat Datang</h1>
        <p>Laman web ini diwujudkan bagi mengumpul maklumat photographer/videographer yang ada terlibat dalam isu-isu tertentu (terutamanya untuk komuniti shoot & burn wedding Malaysia). 
        Laman web ini dibina oleh individu atas niat sukarela semata-mata (Developer juga seorang videographer & photographer yang masih berehat). Semoga laman web ini dapat memberi manfaat kepada komuniti shoot & burn wedding Malaysia.</p>

        Pembinaan laman web terinspirasi dari FB Post tuan Hakimi Abd di Facebook.
        
        <p></p>

        <img src="fb.png" alt="FB Image" style="box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;">
        </br>
        <a href="https://www.facebook.com/groups/1526606434236809/permalink/3839793786251384/">Facebook Link</a>
        </br>

        Sebarang cadangan penambah baikan amatlah dialu-alukan dengan menekan butang di bawah.
        </br>
        </br>

        <button type="button" class="btn btn-primary" id="submitCadangan" data-toggle="modal" data-target="#feedbackModal">Hantar Cadangan</button>
        </br>
        <p></p>
        </br>
        <p></p>

        <!-- Feedback Modal -->
        <div class="modal fade" id="feedbackModal" tabindex="-1" role="dialog" aria-labelledby="feedbackModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="feedbackModalLabel" >Hantar Cadangan</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="feedbackForm">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="form-group">
                                <label for="suggestion">Suggestion/Feedback:</label>
                                <textarea class="form-control" id="suggestion" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" id="submitFeedbackBtn">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add active class to "Laman Utama" link and remove from others
    document.getElementById("lamanUtamaLink").classList.add("active");
    document.getElementById("hantarAduanLink").classList.remove("active");
    document.getElementById("senaraiAduanLink").classList.remove("active");

    // Add event listener to the "Hantar Cadangan" button to show the modal
    document.getElementById("submitCadangan").addEventListener("click", function() {
        $('#feedbackModal').modal('show');
    });

    // Add event listener to the feedback form submit button
    document.getElementById("submitFeedbackBtn").addEventListener("click", function() {
        // Add your logic to handle feedback submission here
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var suggestion = document.getElementById("suggestion").value;
        
        // For demonstration purposes, you can log the values to the console
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Suggestion/Feedback: " + suggestion);
        
        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("suggestion").value = "";
        
        // Close the modal
        $('#feedbackModal').modal('hide');
    });
}


// Function to load the "Hantar Aduan" content
function loadHantarAduanContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = generateHantarAduanForm();

    // Add active class to "Hantar Aduan" link and remove from others
    document.getElementById("lamanUtamaLink").classList.remove("active");
    document.getElementById("hantarAduanLink").classList.add("active");
    document.getElementById("senaraiAduanLink").classList.remove("active");
}

// Function to load the "Senarai Aduan" content
function loadSenaraiAduanContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = "<h1>Senarai Aduan</h1>";

    // Add active class to "Senarai Aduan" link and remove from others
    document.getElementById("lamanUtamaLink").classList.remove("active");
    document.getElementById("hantarAduanLink").classList.remove("active");
    document.getElementById("senaraiAduanLink").classList.add("active");
}

// Add event listeners to navigation links
document.getElementById("lamanUtamaLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadLamanUtamaContent();
});

document.getElementById("hantarAduanLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadHantarAduanContent();
});

document.getElementById("senaraiAduanLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadSenaraiAduanContent();
});

// Initially load the "Laman Utama" content
loadLamanUtamaContent();

// Initially load the "Hantar Aduan" form
document.getElementById("hantarAduanLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadHantarAduanContent();
});


// Function to load the "Hantar Aduan" content
function loadHantarAduanContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = generateHantarAduanForm();

    // Add active class to "Hantar Aduan" link and remove from others
    document.getElementById("lamanUtamaLink").classList.remove("active");
    document.getElementById("hantarAduanLink").classList.add("active");
    document.getElementById("senaraiAduanLink").classList.remove("active");

    // Add event listener to the button after it's created
    document.getElementById("submitModalBtn").addEventListener("click", function() {
        // Capture the form data
        console.log('Hantar Aduan is clicked');
        var name = document.getElementById("name").value;
        var company = document.getElementById("company").value;
        var issue = document.getElementById("issue").value;
        var instagram = document.getElementById("instagram").value;
        var facebook = document.getElementById("facebook").value;
        var phone = document.getElementById("phone").value;
        var issueDescription = document.getElementById("note").value;
        //var attachmentFile = document.getElementById("attachment").files[0];

        // Store the captured data (you can store it in localStorage or any other method)
        var aduanData = {
            name: name,
            company: company,
            issue: issue,
            instagram: instagram,
            facebook: facebook,
            phone: phone,
            issueDescription: issueDescription
            //attachment: attachmentFile
        };

        $('#exampleModal').modal('hide');

        // Save the data to localStorage
        localStorage.setItem('aduanData', JSON.stringify(aduanData));

        // Load the "Senarai Aduan" content
        loadSenaraiAduanContent();

        // Display the stored data on the "Senarai Aduan" page
        displayAduanData();
    });
}

// Function to load the "Senarai Aduan" content
function loadSenaraiAduanContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = "<h1>Senarai Aduan</h1>";

    // Add active class to "Senarai Aduan" link and remove from others
    document.getElementById("lamanUtamaLink").classList.remove("active");
    document.getElementById("hantarAduanLink").classList.remove("active");
    document.getElementById("senaraiAduanLink").classList.add("active");
}

// Function to load the "Hantar Aduan" content
function loadHantarAduanContent() {
    var dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = generateHantarAduanForm();

    // Add active class to "Hantar Aduan" link and remove from others
    document.getElementById("lamanUtamaLink").classList.remove("active");
    document.getElementById("hantarAduanLink").classList.add("active");
    document.getElementById("senaraiAduanLink").classList.remove("active");

    // Add event listener to the button after it's created
    document.getElementById("submitModalBtn").addEventListener("click", function() {
        // Capture the form data
        var name = document.getElementById("name").value;
        var company = document.getElementById("company").value;
        var issue = document.getElementById("issue").value;
        var instagram = document.getElementById("instagram").value;
        var facebook = document.getElementById("facebook").value;
        var phone = document.getElementById("phone").value;
        var issueDescription = document.getElementById("note").value;
        //var attachmentFile = document.getElementById("attachment").files[0];

        // Store the captured data (you can store it in localStorage or any other method)
        var aduanData = {
            name: name,
            company: company,
            issue: issue,
            instagram: instagram,
            facebook: facebook,
            phone: phone,
            issueDescription: issueDescription
            //attachment: attachmentFile
        };

        // Capture the reporter's information
        var reporterName = document.getElementById("recipient-name").value;
        var reporterEmail = document.getElementById("recipient-email").value;
        var reporterFacebook = document.getElementById("recipient-fb").value;

        // Store the reporter's information
        var reporterInfo = {
            name: reporterName,
            email: reporterEmail,
            facebook: reporterFacebook
        };

        // Combine aduan data and reporter info
        var combinedData = {
            aduanData: aduanData,
            reporterInfo: reporterInfo
        };

        // Save the data to localStorage
        localStorage.setItem('aduanData', JSON.stringify(combinedData));
        

        // Load the "Senarai Aduan" content
        loadSenaraiAduanContent();

        // Display the stored data on the "Senarai Aduan" page
        displayAduanData();
    });
}

// Function to display the stored data on the "Senarai Aduan" page
function displayAduanData() {
    // Retrieve the stored data from localStorage
    var combinedData = JSON.parse(localStorage.getItem('aduanData'));
    console.log('Display aduan data function displayaduandata');

    // Check if there's any data
    if (combinedData) {
        // Display the data on the "Senarai Aduan" page
        var dynamicContentContainer = document.getElementById("dynamicContentContainer");
        dynamicContentContainer.innerHTML += `
            
            </br>
            </br>
            <h2>Aduan</h2>
            <p>Nama: ${combinedData.aduanData.name}</p>
            <p>Nama Syarikat: ${combinedData.aduanData.company}</p>
            <p>Tugasan: ${combinedData.aduanData.issue}</p>
            <p>Instagram: ${combinedData.aduanData.instagram}</p>
            <p>Facebook: ${combinedData.aduanData.facebook}</p>
            <p>No Telefon: ${combinedData.aduanData.phone}</p>
            <p>Isu: ${combinedData.aduanData.issueDescription}</p>
            <p>Aduan di hantar oleh: ${combinedData.reporterInfo.name}</p>
            <p>Email pengadu: ${combinedData.reporterInfo.email}</p>
            <p>Facebook pengadu: ${combinedData.reporterInfo.facebook}</p>
            <p>Lampiran: ${combinedData.aduanData.attachmentFile}</p>
        `;
    }
}




// Add event listeners to navigation links
document.getElementById("lamanUtamaLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadLamanUtamaContent();
});

document.getElementById("hantarAduanLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadHantarAduanContent();
});

document.getElementById("senaraiAduanLink").addEventListener("click", function (event) {
    event.preventDefault();
    loadSenaraiAduanContent();
});

// Initially load the "Laman Utama" content
loadLamanUtamaContent();



$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

