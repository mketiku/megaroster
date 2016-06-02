$(document).foundation();

var megaRoster = {
    //Object called megaRoster

    //Page Load
        init: function(){
            //init is a property but the right side is a functions
            this.setupEventListeners();
        },
        setupEventListeners: function(){
            document.querySelector('form').onsubmit = this.addStudent
        }, //this refers to the same object

        addStudent: function(ev){
            ev.preventDefault();

            ev.currentTarget //this is the form
            var studentName = this.studentName.value

            var
            this.count += 1 ;
            console.log
            }
        };
        megaRoster.init()


//event was submit the object it occured on is before
    //this is referring to the event where the thing occured on
    //On Submit (Add student to roster)
