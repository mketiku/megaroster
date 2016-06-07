$(document).foundation();
//Object called megaRoster
//Page Load

var megaRoster = {

        init: function(){
            //init is a property but the right side is a functions
            //init runs first,
            this.setupEventListeners();
            this.count = 0 ;
        },
        setupEventListeners: function(){
            document.querySelector('form#studentForm').onsubmit = this.addStudent.bind(this);
            //bind forces js to bind "this " to the current object

        }, //this refers to the same object

        addStudent: function(ev){
            ev.preventDefault();
            var f = ev.currentTarget; //this is the form
            var studentName = f.studentName.value;
            var listItem = this.buildListItem(studentName);
            var studentList = document.querySelector('#studentList') //hashtag take items to the top of the page
            studentList.appendChild(listItem);

            f.reset();

            this.count += 1 ;
            f.studentName.focus();
            //when ran, this will return focus to the student


        },
        buildListItem: function(studentName){
            //build list item using a studentName
            var listItem = document.createElement('li');
            var removeLink = this.buildLink({
                text:'remove'
                handler: function(){
                    lisItem.remove();
                }
            });

//top and bottom button are the 
            var promoteLink = this.buildLink({
                text:'promote'
                handler: function(){
                    listItem.style.border = '2px CornflowerBlue dashed';
                }
            });
                listItem.innerText= studentName;
                listItem.appendChild(removeLink);
                //list items bottom

                //list items top
                listItem.appendChild(promoteLink);

            listItem.innerText = studentName;
            return listItem;

        buildLink: function(linkText, handler){
            var link = document.createElement('a');
                //function that build a link with the text that we pass on
            link.href = "#";
            link.innerText = options.linkText;
            link.onclick = options.handler;
            return link
            },
        },
};

megaRoster.init()


//event was submit the object it occured on is before
    //this is referring to the event where the thing occured on
    //On Submit (Add student to roster)
