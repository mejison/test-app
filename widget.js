(function(w, d) {
    const getWidgetContent = () => {
        return `
            <div class="video" :class="{open: isOpen}">
                <a href="#" @click.prevent="isOpen = false" class="close">—</a>
                <video id="video" controls autoplay muted loop>
                    <source type="video/mp4"  :src="video" >
                </video>
                <div class="info">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                    <button>Try for free</button>
                </div>
            </div>
            <div class="preview" @click="onPlay" v-if="! isOpen">
                <img :src="preview" />
                <svg  class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
            </div>
        `;
    }

    const loadReq = () => {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/vue@2.7.14';
        d.body.appendChild(script)

        const link = document.createElement('link')
        link.href = 'widget.css';
        link.rel = 'stylesheet'
        d.body.appendChild(link)
    }

    const renderWrapper = () => {
        const el = document.createElement('div');
        el.id = 'widget'
        el.class = 'widget'
        el.innerHTML = getWidgetContent();
        d.body.appendChild(el);
    }

    const renderVueApp = () => {
        new Vue({
            el: '#widget',
            data: () => {
                return {
                    isOpen: false,
                    preview: '/preview.webp',
                    title: ' This is FacePop! ',
                    description: 'A widget you can use to upload videos and get personal with your customers to schedule meetings, ask for reviews, or share the latest features with its CTA functionality.',
                    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
                }
            },
            methods: {
                onPlay() {
                    this.isOpen = true;
                },
            }
        })
    }

    const init = () => {
        loadReq();
        renderWrapper();
        setTimeout(() => {
            renderVueApp();
        }, 1000)
    }

    init();
})(window, document);
