var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function () {
        this.tasks.forEach(function (task) {
            alert(this.name + " wants to " + task);
        });
    }
};

bunny.showTasks();