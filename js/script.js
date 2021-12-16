// Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2- applicare l’autoplay allo slider: ogni 3 secondi, 
//    cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, 
//    bloccare l’autoplay e farlo riprendere quando esce

const app = new Vue (
    {
        el: '#app', //dichiaro l'elemento da usare
        data: { //dichiaro i dati
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg'
            ],
            position: 0,
            active: false,
        },
        methods: 
        {
            nextImage: function()
            {
                this.position += 1;
                if (this.position > this.images.length - 1) 
                {
                    this.position = 0;
                }
            },
            
            prevImage: function()
            {
                this.position -= 1;
                if (this.position < 0) 
                {
                    this.position = this.images.length - 1;
                }
            },

            selectedCircle: function(index)
            {
                this.position = index;
            },

            mouseHoverActive: function()
            {
                this.active = !this.active;  
                console.log(this.active); 
            }, 

            mouseHovernoActive: function()
            {
                this.active = !this.active;   
                console.log(this.active); 
            },

            dynamic: function()
            {
                this.timer = setInterval(() => {
                    if(this.active == false)
                    {
                        this.nextImage();
                    }
                }, 2500);
            }
        },
        created() 
        {
            this.dynamic();
        }
    }
)