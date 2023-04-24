function changeImage(){
    var img = document.getElementById('image');
    img.src = 'assets/Ubah-Profile/new-profile.jpg';
}

function changeProfile(event){
    event.preventDefault();

    var name = document.getElementById('name').value;

    localStorage.setItem('ls_name', name);
}