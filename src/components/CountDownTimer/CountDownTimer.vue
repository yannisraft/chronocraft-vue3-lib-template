<template>
<div class="widget-container">
    <h3>Chronocraft Count down Timer</h3>
    <div class="countdown">
        <h2>
            {{ timeLeftString }}
        </h2>
    </div>
    <div class="buttonscontainer">
        <button v-for="(btntime, index) in availableTimes" :key="index" @click="SetCounterTime(btntime.time)" type="button">{{ btntime.label }}</button>
    </div>
    <h5>Status: {{ status }}</h5>
    <div class="madewith">Created with Options API</div>
</div>
</template>

<script>
// Component created with Options API
// ----------------------------------------

export default {
    name: 'CountDownTimer',
    data: () => ({
        timeLeft: 0, // In Seconds
        timeLeftString: '00:00',
        intervalTimer: null,
        status: 'Idle',
        availableTimes: [{
                time: 10,
                label: '10s'
            },
            {
                time: 180,
                label: '3m'
            },
            {
                time: 300,
                label: '5m'
            }
        ]
    }),
    methods: {
        SetCounterTime(sec) {
            var self = this;
            if(this.intervalTimer) clearInterval(this.intervalTimer);
            this.timeLeft = sec;
            this.status = 'Counting...';
            this.UpdateTimeLabel();

            this.intervalTimer = setInterval(() => {
                if (self.timeLeft <= 0) {
                    clearInterval(self.intervalTimer);
                    self.status = 'Ended';

                    setTimeout(()=> {
                        self.status = 'Idle';
                    }, 2000);
                } else {
                    self.timeLeft--;
                    self.UpdateTimeLabel();
                    
                    self.status = 'Counting...';
                }
            }, 1000);
        },
        UpdateTimeLabel() {
            const minutes = Math.floor((this.timeLeft % 3600) / 60);
            const seconds = this.timeLeft % 60;

            this.timeLeftString = `${this.zeroPadded(minutes)}:${this.zeroPadded(seconds)}`;
        },
        zeroPadded(num) {
            return num < 10 ? `0${num}` : num;
        },
        hourConvert(hour) {
            // 15 --> 3
            return (hour % 12) || 12;
        }
    }
}
</script>

<style lang="css" scoped>
@import "./countdowntimer.css";
</style>
