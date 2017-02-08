// component file for main header

angular.module('mainHeader').component('mainHeader', {
    templateUrl: 'js/main-header/main-header.template.html',
    controller: function MainHeaderController() {
        //notification count in main header
        this.notificationCount = 3;
    }
});