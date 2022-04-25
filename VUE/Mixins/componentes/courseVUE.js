Vue.component('course-vue', {
    mixins: [course],
    data: function () {
        return {
            styleClass: 'course-vue',
            header: {
                title: 'Curso VUE',
                image: 'https://picsum.photos/64/64'
            }
        }
    },
});
