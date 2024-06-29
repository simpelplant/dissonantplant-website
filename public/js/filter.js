document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('table tbody');
    const forms = document.forms;
  
    // filter songs
    const searchBar = forms['search'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const songs = list.getElementsByTagName('tr');
      Array.from(songs).forEach((song) => {
        const title = song.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          song.style.display = '';
        } else {
          song.style.display = 'none';
        }
      });
    });
  
  })
  