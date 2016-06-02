$(document).foundation();

var megaRoster = {
    //Object called megaRoster
    //Page Load
        init: function(){
            //init is a property but the right side is a functions
            //init runs first,
            this.setupEventListeners();
            this.count = 0 ;


        },
        setupEventListeners: function(){
            document.querySelector('form#studentForm').onsubmit = this.addStudent.bind(this)

            this.addStudent.bind(this);
            //bind forces js to bind "this " to the current object

        }, //this refers to the same object

        addStudent: function(ev){
            ev.preventDefault();
            var f = ev.currentTarget; //this is the form
            var studentName = f.studentName.value;
            var listItem = this.buildListItem(studentName);
            var studentList = document.querySelector('#studentList')

            studentList.appendChild(listItem);

            f.reset();

            this.count += 1 ;


        },
        buildListItem: function(studentName){
            //build list item using a studentName
            var listItem = document.createElement('li');
            var removeLink = this.buildLink('remove',);
            var promoteLink = this.buildLink('promote,');
            this.buildLink.


            listItem.innerText = studentName;
            return listItem;

        buildLink: function(linkText, handler){
            var link = document.createElement('a');
                //function that build a link with the text that we pass on
            link.href = "#";
            link.innerText = linkText;
            link.onclick = handler;
            return link
            },
        },
};

megaRoster.init()


//event was submit the object it occured on is before
    //this is referring to the event where the thing occured on
    //On Submit (Add student to roster)
