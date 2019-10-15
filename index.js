new Vue({
    el: '.image-carousel',
    data: {
        images: ['img/ekiminsert_maxpalet_8102019.jpg',
         'img/ekiminsert_simplemaske_131019.jpg', 
         'img/ekiminsert_ogx30_131019.jpg', 
         'img/ekiminsert_lpmdus50_8102019.jpg', 
         'img/ekiminsert_arkonem2a1o_8102019.jpg'],
        currentNumber: 0,
        timer: null,
    },
    mounted: function () {
        this.startRotation();
    },
    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },
        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },
        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },
    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
});