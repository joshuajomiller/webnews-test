// component file for left sidebar

angular.module('leftSidebar').component('leftSidebar', {
    templateUrl: 'js/left-sidebar/left-sidebar.template.html',
    controller: function LeftSidebarController() {
        //menu titles, icons and active status defined here
        this.menuLinks = [
            { icon: "home.png", title: "Home", active: true },
            { icon: "workflow.png", title: "Workflow", active: false },
            { icon: "statistics.png", title: "Statistics", active: false },
            { icon: "calendar.png", title: "Calendar", active: false },
            { icon: "users.png", title: "Users", active: false },
            { icon: "settings.png", title: "Settings", active: false }
        ];

        //active link functionality
        this.setLinkActive = function(link){
            this.menuLinks.forEach(function(menuLink){
                    //first remove active status from all links
                    menuLink.active = false;
                });
            //add active status to active link
            link.active = true;
        }
    }
});