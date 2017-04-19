function showhide(id) {

       	var e = document.getElementById(id);
       	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
        $(document).on('click','.close',function(){
        	$(this).parents('span').remove();

        })

        document.getElementById('uploadBtn').onchange = function uploadOnChange() {
            //document.getElementById("uploadFile").value = this.value;
            var filename = this.value;
            var lastIndex = filename.lastIndexOf("\\");
            if (lastIndex >= 0) {
                filename = filename.substring(lastIndex + 1);
            }
            var files = $('#uploadBtn')[0].files;
            for (var i = 0; i < files.length; i++) {
             $("#upload_prev").append('<span>'+'<div class="filenameupload">'+files[i].name+'</div>'+'<p class="close" >X</p></span>');
            }
            document.getElementById('filename').value = filename;
        }

     }
