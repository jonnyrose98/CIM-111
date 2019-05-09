    $(document).ready(function () {

        var events = [{
                date: '1700',
                content: 'Harpsichord maker Bartolomeo Cristofori’s invents the “piano e forte” (“soft and loud”) in Florence, Italy <img src = " https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/BartolomeoCristofori.jpg/220px-BartolomeoCristofori.jpg" > '
                },
            {
                date: '1739',
                content: 'Domenico del Mela builds the earliest known upright piano in Gagliano, Italy <img src = "https://bestsheetmusiceditions.com/wp-content/uploads/2016/10/domenico-piano.jpg">'
                },
            {
                date: 'Early 1700s',
                content: 'Piano builder Gottfried Silbermann adds a precursor to the modern damper pedal, which lifts all dampers from the strings at once to create a sustained tone.  <img src = "http://www.animus-cristofori.com/files/adr3186.jpg" > '
                },
            {
                date: 'Late 1700s',
                content: 'Piano making flourished in the Viennese school. Mozart composed for these instruments, which were built with wooden frames with two strings per note. <img src = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzMyNjY1ODY5/wolfgang-mozart-9417115-2-402.jpg">'
                },
            {
                date: 'Early 1800s',
                content: 'The English firm Broadwood is the first to make sturdy pianos with a range of more than five octaves <img src = "http://www.shafferpianos.com/broadwood/broadwood.jpg">'
                },
            {
                date: '1811',
                content: 'Theatrical pianist and composer Franz Liszt was born in Hungary. He brought virtuosity and flair to piano playing and created the piano recital. <img src = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MDQyMjI5Nzc1/franz-liszt-9383467-2-402.jpg">'
                },
            {
                date: '1853',
                content: 'The piano maker Steinway and Sons was founded by Heinrich Engelhard Steinway. His innovations include cast-iron frames and overstringing, or placing strings vertically overlapping and slanted. <img src = "https://www.chuppspianos.com/wp-content/uploads/2016/10/Steinway-Style-1-Square-Grand-41991.jpg">'
                },
            {
                date: '1863',
                content: 'Frenchman Henri Fourneaux invents the player piano, which “plays itself” using a piano roll and mechanics <img src = "http://www.piano-play-it.com/images/player-piano.jpg">'
                },
            {
                date: '1873',
                content: 'Composer, pianist, and conductor Sergei Rachmaninoff is born in Russia. A virtuoso, his hands spanned the interval of a 13th on the keyboard. His second and third piano concertos are among the most challenging. <img src = "https://cdn.britannica.com/s:300x300/05/9605-004-EDF31309.jpg">'
                },
            {
                date: 'Late 1800s',
                content: 'The modern upright piano and grand pianos that are used today first appeared <img src = "https://www.jimlaabsmusicstore.com/wp-content/plugins/wp-easycart-data/products/pics1/Music_d83da07a9a254ff49e36c35ddfd40392.png">'
                },
            {
                date: '1938',
                content: 'Composer John Cage “prepares” a piano, adding nuts, bolts, and pieces of rubber in the instrument to create a wide array of percussive sounds <img src = "https://media1.fdncms.com/orlando/imager/u/blog/24886193/john-cage-wtih-headphones.jpg?cb=1553877757">'
                },
            {
                date: '1962',
                content: 'The first Van Cliburn International Piano Competition is held in Fort Worth, Texas. In 1958 Van Cliburn sensationally won the first International Tchaikovsky Competition in Russia at the height of the Cold War.<img src = "https://dallasnews.imgix.net/IMG_3704.jpg">'
                },
            {
                date: '1980s',
                content: 'Digital pianos became available. They used digital sampling to produce the sound of every piano note. Later innovations include keyboards “weighted” to feel like a grand piano’s and onboard recording technology. <img src = "https://images-na.ssl-images-amazon.com/images/I/41Z90wf9UOL.jpg">'
                },
            {
                date: '2000s',
                content: 'With MIDI technology, internet capability, onboard learning tools, computer screens and more, pianos enter the 21st century with hi-tech features that make them as popular as ever. In 2005, 144,000 digital pianos are sold in the US <img src = "https://www.bhphotovideo.com/images/images2500x2500/nektar_technology_impact_lx25_midi_controller_1286401.jpg">'
                }
            ];

        $('#my-timeline').roadmap(events, {
            eventsPerSlide: 6,
            slide: 1,
            prevArrow: '<i class="material-icons">keyboard_arrow_left</i>',
            nextArrow: '<i class="material-icons">keyboard_arrow_right</i>'
        });
    });
