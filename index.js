

var primary_btns = document.getElementsByClassName('primary-btn');

console.log(primary_btns)

for (var i = 0; i < primary_btns.length; i++) {


    (
        function () {
            var currentBtn = primary_btns[i];

            currentBtn.innerHTML = `
        <span style="z-index: 1; position: relative"> ${currentBtn.innerHTML}</span>
         <div class="wave-box">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(229,190,87,0.7" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(229,190,87,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(229,190,87,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#E5BE57" />
                </g>
            </svg>
        </div>
    `;


            var showWaves = () => {

                box.style.display = 'block';
                console.log(document.getElementsByClassName('primary-btn')[i], i)

            }

            var hideWaves = () => {

                box.style.display = 'none';
                console.log(document.getElementsByClassName('primary-btn')[i], i)
            }

            var box = currentBtn.getElementsByClassName("wave-box")[0];

            box.style.display = 'none'

            currentBtn.addEventListener('mouseover', showWaves)

            currentBtn.addEventListener('touchstart', showWaves)

            currentBtn.addEventListener('mouseleave', hideWaves)

            currentBtn.addEventListener('touchend', hideWaves)
        }
    )();
}