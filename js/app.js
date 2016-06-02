$(document).foundation();

var megaRoster = {
    //Object called megaRoster

    //Page Load
        init: function(){
            //init is a property but the right side is a functions
            this.setupEventListeners();
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
            this.count += 1 ;
            console.log(studentName);
        },

            buildListItem: function(studentName){
                //build list item using a studentName
                var listItem = document.createElement('li')
                listItem.innerText = studentName;
            }
        },
};

megaRoster.init()


//event was submit the object it occured on is before
    //this is referring to the event where the thing occured on
    //On Submit (Add student to roster)
