var notifications = [];

notifications = appworks.notifications.get();
console.log(notifications);
// e.g. notifications = [1, 2, 3]

function clear() {
    appworks.notifications.clear();
    notifications = [];
}

// assuming a new notification has not come in yet
notifications = appworks.notifications.get();
console.log(notifications);
// []