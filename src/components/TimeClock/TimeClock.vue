<template>
<div class="widget-container">
    <h3>Chronocraft Time Clock</h3>
    <div class="clock">
        <h4>
            {{ dateString }}
        </h4>
        <h2>
            {{ timeString }}
        </h2>
    </div>
    <div class="madewith">Created with Composition API</div>
</div>
</template>

<script>
// Component created with Composition API
// --------------------------------------

import {
    defineComponent,
    ref,
    onMounted
} from "vue";

export default defineComponent({
    name: 'TimeClock',
    setup(props, context) {
        let dateString = ref('00/00/0000');
        let timeString = ref('00:00:00');
        let intervalTimer = null;
        const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        function zeroPadded(num) {
            return num < 10 ? `0${num}` : num;
        }

        function Initialize() {
            intervalTimer = setInterval(() => {
                var cd = new Date();
                timeString.value = zeroPadded(cd.getHours(), 2) + ':' + zeroPadded(cd.getMinutes(), 2) + ':' + zeroPadded(cd.getSeconds(), 2);
                dateString.value = zeroPadded(cd.getFullYear(), 4) + '-' + zeroPadded(cd.getMonth() + 1, 2) + '-' + zeroPadded(cd.getDate(), 2) + ' ' + week[cd.getDay()];
            }, 1000);
        }

        onMounted(() => {
            Initialize();
        });

        return {
            dateString,
            timeString
        }
    }
    /* data: () => ({
        dateString: '00/00/0000',
        timeString: '00:00:00',
        week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        intervalTimer: null
    }),
    mounted() {
        var self = this;
        this.intervalTimer = setInterval(() => {
            var cd = new Date();
            self.timeString = self.zeroPadded(cd.getHours(), 2) + ':' + self.zeroPadded(cd.getMinutes(), 2) + ':' + self.zeroPadded(cd.getSeconds(), 2);
            self.dateString = self.zeroPadded(cd.getFullYear(), 4) + '-' + self.zeroPadded(cd.getMonth()+1, 2) + '-' + self.zeroPadded(cd.getDate(), 2) + ' ' + self.week[cd.getDay()];
        }, 1000);
    },
    methods: {
        zeroPadded(num) {
            return num < 10 ? `0${num}` : num;
        }
    } */
});
</script>

<style lang="css" scoped>
h2 {
    font-size: 46pt;
    font-weight: 500;
    margin: 5px;
}

h4 {
    font-size: 18pt;
    font-weight: 500;
    margin: 5px;
}
</style>
