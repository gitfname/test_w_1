import m from "mithril"

function facebook() {
    return <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
    </svg>
}

function mail() {
    return <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z"></path>
    </svg>
}

function twitter() {
    return <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z"></path>
    </svg>
}

function github() {
    return <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
    </svg>
}

function phone() {
    return <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9975 20C10.4659 20.0121 3.99088 13.4595 4.00001 5.00251C4.00001 4.45023 4.44773 4 5.00001 4H7.63937C8.13494 4 8.55593 4.36413 8.6287 4.85433C8.80311 6.0292 9.14517 7.17297 9.64448 8.2507L9.74725 8.4725C9.89013 8.78091 9.79328 9.14734 9.51668 9.34487C8.6993 9.92859 8.38692 11.1036 9.0237 12.0204C9.82278 13.1708 10.8301 14.1779 11.9803 14.9766C12.897 15.6132 14.0718 15.3009 14.6555 14.4836C14.8532 14.2069 15.2198 14.11 15.5284 14.2529L15.7492 14.3552C16.827 14.8545 17.9708 15.1966 19.1458 15.371C19.636 15.4437 20 15.8647 20 16.3603V19C20 19.5523 19.5512 20 18.9989 20L18.9975 20Z"></path>
    </svg>
}


function desktopSvg_2() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32" xml:space="preserve">
        <path id="desktop_1_" d="M23,29.36H9v-0.72h6.64v-4.28H3c-1.301,0-2.36-1.059-2.36-2.36V5c0-1.301,1.059-2.36,2.36-2.36h26
   c1.302,0,2.36,1.059,2.36,2.36v17c0,1.302-1.059,2.36-2.36,2.36H16.36v4.279H23V29.36z M1.36,19.36V22c0,0.904,0.736,1.64,1.64,1.64
   h26c0.904,0,1.64-0.735,1.64-1.64v-2.64H1.36z M1.36,18.64h29.28V5c0-0.904-0.735-1.64-1.64-1.64H3C2.096,3.36,1.36,4.096,1.36,5
   V18.64z"/>
        <rect />
    </svg>
}
function desktopSvg() {
    return <svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g></g>
        <path d="M2 11h13v-8h-13v8zM3 4h11v6h-11v-6zM15.5 1h-14c-0.827 0-1.5 0.638-1.5 1.423v10.154c0 0.785 0.673 1.423 1.5 1.423h14c0.827 0 1.5-0.638 1.5-1.423v-10.154c0-0.785-0.673-1.423-1.5-1.423zM16 12.577c0 0.234-0.225 0.423-0.5 0.423h-14c-0.275 0-0.5-0.189-0.5-0.423v-10.154c0-0.234 0.225-0.423 0.5-0.423h14c0.275 0 0.5 0.189 0.5 0.423v10.154zM5 15h7v1h-7v-1z" />
    </svg>
}

function medalSvg() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 208.35 208.35" xml:space="preserve">
        <g>
            <g>
                <path d="M122.436,73.882h-3.103l-6.059,6.063H95.086l-6.059-6.063h-3.106v19.208h36.511V73.882H122.436z
			    M119.426,78.044V90.08H88.938V78.055l4.903,4.899h20.679L119.426,78.044z"/>

                <path d="M166.513,24.404l0.437-0.437L149.542,6.556l-43.787,43.773l-0.433,0.444l17.408,17.411
			    L166.513,24.404z M122.733,63.929L109.577,50.77l39.965-39.958l13.156,13.156L122.733,63.929z"/>

                <path d="M104.162,102.001c-26.559,0-48.161,21.606-48.161,48.168c0,26.555,21.602,48.164,48.161,48.164
                c26.569,0,48.178-21.609,48.178-48.164C152.341,123.606,130.732,102.001,104.162,102.001z M104.162,195.323
                c-24.898,0-45.14-20.256-45.14-45.151c0-24.898,20.242-45.158,45.14-45.158c24.902,0,45.158,20.26,45.158,45.158
                C149.32,175.067,129.064,195.323,104.162,195.323z"/>

                <path d="M173.073,24.404l0.437-0.437L149.986,0.437L149.542,0L104.17,45.366L59.262,0.437L58.818,0
                L35.273,23.524L34.84,23.96l44.886,44.882v28.534c-20.507,9.513-33.741,30.188-33.741,52.792
                c0,32.077,26.097,58.181,58.174,58.181c32.095,0,58.199-26.104,58.199-58.181c0-22.604-13.231-43.286-33.752-52.792V68.854
                L173.073,24.404z M104.162,205.344c-30.417,0-55.164-24.751-55.164-55.172c0-22.396,13.399-42.413,34.142-50.999l6.993-2.902
                h-7.394V70.697h3.103L39.095,23.96L58.818,4.252l44.904,44.932l0.444,0.444l45.376-45.373l19.716,19.712l-46.743,46.729h3.01
                l0.075,25.574h-7.383l6.989,2.902c20.75,8.579,34.157,28.599,34.157,50.999C159.359,180.592,134.597,205.344,104.162,205.344z"/>

                <polygon points="92.141,129.333 94.099,136.984 101.528,132.969 101.528,171.348 110.418,171.348 
			    110.418,123.345 103.5,123.345"/>
            </g>
        </g>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}

function layersSvg() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 301.566 301.566" xml:space="preserve">
        <g>
            <g>
                <path d="M258.315,134.417l43.251-43.251h-44.623v-0.001l44.623-44.623H79.019L0,125.561h44.623L0,170.185h43.251L0,213.435h41.589
			L0,255.025h222.548l79.019-79.019h-41.589l41.589-41.589H258.315z M22.09,116.411l60.719-60.719h196.668l-60.719,60.719H22.09z
			 M22.09,161.035l35.473-35.473h164.984l25.246-25.246h31.683l-60.719,60.719H22.09z M279.476,185.155L279.476,185.155
			l-60.719,60.719H22.09l32.439-32.439h168.018l28.28-28.28H279.476z M218.757,204.285H22.09l34.101-34.101h166.357l26.618-26.618
			h30.31L218.757,204.285z"/>
            </g>
        </g>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}

function statitics() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 294 294" xml:space="preserve">
        <g>
            <path d="M279,250H15c-8.284,0-15,6.716-15,15s6.716,15,15,15h264c8.284,0,15-6.716,15-15S287.284,250,279,250z" />

            <path d="M30.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-130c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v130
       C21,223.747,25.253,228,30.5,228z"/>

            <path d="M123.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-195c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v195
       C114,223.747,118.253,228,123.5,228z"/>

            <path d="M216.5,228h47c5.247,0,9.5-4.253,9.5-9.5v-105c0-5.247-4.253-9.5-9.5-9.5h-47c-5.247,0-9.5,4.253-9.5,9.5v105
       C207,223.747,211.253,228,216.5,228z"/>
        </g>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}

function vector() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 206.518 206.518" xml:space="preserve">
        <g>
            <g>
                <path d="M202.621,89.621h-23.379c-2.152,0-3.897,1.745-3.897,3.897v7.793h-35.168c9.499-7.113,15.685-18.419,15.685-31.172
           c0-0.185-0.08-0.343-0.105-0.521c6.757-1.705,11.795-7.786,11.795-15.065c0-8.594-6.992-15.586-15.586-15.586
           s-15.586,6.992-15.586,15.586c0,7.28,5.037,13.36,11.795,15.065c-0.025,0.178-0.105,0.336-0.105,0.521
           c0,16.077-12.237,29.347-27.885,30.995c-1.804-6.612-7.802-11.512-14.978-11.512c-7.241,0-13.29,4.987-15.033,11.69H31.172v-7.793
           c0-2.152-1.745-3.897-3.897-3.897H3.897C1.745,89.621,0,91.366,0,93.517v23.379c0,2.152,1.745,3.897,3.897,3.897h23.379
           c2.152,0,3.897-1.745,3.897-3.897v-7.793H66.34c-8.645,6.473-14.526,16.42-15.513,27.776c-6.792,1.681-11.861,7.782-11.861,15.086
           c0,8.594,6.992,15.586,15.586,15.586s15.586-6.992,15.586-15.586c0-7.176-4.901-13.173-11.512-14.978
           c1.649-15.648,14.918-27.885,30.995-27.885h0.553c1.743,6.703,7.792,11.69,15.033,11.69c7.241,0,13.29-4.987,15.033-11.69h55.105
           v7.793c0,2.152,1.745,3.897,3.897,3.897h23.379c2.152,0,3.897-1.745,3.897-3.897V93.517
           C206.517,91.366,204.772,89.621,202.621,89.621z M144.172,54.552c0-4.298,3.495-7.793,7.793-7.793
           c4.298,0,7.793,3.495,7.793,7.793c0,4.298-3.495,7.793-7.793,7.793C147.667,62.345,144.172,58.85,144.172,54.552z M23.379,113
           H7.793V97.414h15.586V113z M62.345,151.966c0,4.298-3.495,7.793-7.793,7.793s-7.793-3.495-7.793-7.793
           c0-4.298,3.495-7.793,7.793-7.793S62.345,147.668,62.345,151.966z M105.207,113c-4.298,0-7.793-3.495-7.793-7.793
           c0-4.298,3.495-7.793,7.793-7.793c4.298,0,7.793,3.495,7.793,7.793C113,109.505,109.505,113,105.207,113z M198.724,113h-15.586
           v-3.897v-7.793v-3.897h15.586V113z"/>
            </g>
        </g>

        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}

function android() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 57.001 57.001" xml:space="preserve">
        <g>
            <g>
                <path d="M35.361,5.677l2.497-4.162c0.284-0.474,0.131-1.088-0.343-1.372c-0.475-0.285-1.088-0.132-1.372,0.343l-2.635,4.392
           c-1.569-0.558-3.249-0.878-5.007-0.878s-3.438,0.32-5.007,0.878l-2.635-4.392c-0.284-0.475-0.898-0.627-1.372-0.343
           s-0.627,0.898-0.343,1.372l2.497,4.162c-4.827,2.495-8.14,7.525-8.14,13.324c0,0.553,0.448,1,1,1h28c0.552,0,1-0.447,1-1
           C43.5,13.203,40.188,8.173,35.361,5.677z M15.539,18.001c0.512-6.703,6.13-12,12.962-12s12.45,5.297,12.962,12H15.539z"/>

                <path d="M35.478,11.364H34.16c-0.364,0-0.659,0.295-0.659,0.659v1.318c0,0.364,0.295,0.659,0.659,0.659h1.319
           c0.364,0,0.659-0.295,0.659-0.659v-1.318C36.138,11.659,35.842,11.364,35.478,11.364z"/>

                <path d="M22.841,11.364h-1.319c-0.364,0-0.659,0.295-0.659,0.659v1.318c0,0.364,0.295,0.659,0.659,0.659h1.319
           c0.364,0,0.659-0.295,0.659-0.659v-1.318C23.5,11.659,23.205,11.364,22.841,11.364z"/>

                <path d="M42.5,21.001h-28c-0.552,0-1,0.447-1,1v20.171c0,2.663,2.169,4.829,4.834,4.829H19.5v6.006c0,2.202,1.794,3.994,4,3.994
           s4-1.792,4-3.994v-6.006h2v6.006c0,2.202,1.794,3.994,4,3.994s4-1.792,4-3.994v-6.006h1.166c2.666,0,4.834-2.166,4.834-4.829
           V22.001C43.5,21.448,43.053,21.001,42.5,21.001z M41.5,42.172c0,1.56-1.271,2.829-2.834,2.829H36.5c-0.552,0-1,0.447-1,1v7.006
           c0,1.1-0.897,1.994-2,1.994s-2-0.895-2-1.994v-7.006c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v7.006
           c0,1.1-0.897,1.994-2,1.994s-2-0.895-2-1.994v-7.006c0-0.553-0.448-1-1-1h-2.165c-1.563,0-2.835-1.27-2.835-2.829V23.001h26
           V42.172z"/>

                <path d="M48,21.001c-1.93,0-3.5,1.572-3.5,3.504v13.992c0,1.932,1.57,3.504,3.5,3.504s3.5-1.572,3.5-3.504V24.505
           C51.5,22.573,49.93,21.001,48,21.001z M49.5,38.497c0,0.829-0.673,1.504-1.5,1.504s-1.5-0.675-1.5-1.504V24.505
           c0-0.829,0.673-1.504,1.5-1.504s1.5,0.675,1.5,1.504V38.497z"/>

                <path d="M9,21.001c-1.93,0-3.5,1.572-3.5,3.504v13.992c0,1.932,1.57,3.504,3.5,3.504s3.5-1.572,3.5-3.504V24.505
           C12.5,22.573,10.93,21.001,9,21.001z M10.5,38.497c0,0.829-0.673,1.504-1.5,1.504s-1.5-0.675-1.5-1.504V24.505
           c0-0.829,0.673-1.504,1.5-1.504s1.5,0.675,1.5,1.504V38.497z"/>
            </g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}

function content() {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512" xml:space="preserve">
        <g>
            <g>
                <path d="M503.983,4.276H256H8.017C3.589,4.276,0,7.865,0,12.292v102.614v384.802c0,4.427,3.589,8.017,8.017,8.017H256h247.983
           c4.427,0,8.017-3.589,8.017-8.017V114.906V12.292C512,7.865,508.411,4.276,503.983,4.276z M495.967,491.691H256H16.033V122.923
           H256h239.967V491.691z M495.967,106.889H256H16.033v-86.58H256h239.967V106.889z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M427.023,38.48H332.96c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h94.063
           c4.427,0,8.017-3.589,8.017-8.017C435.04,42.07,431.45,38.48,427.023,38.48z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M469.779,38.48h-17.102c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017h17.102
           c4.427,0,8.017-3.589,8.017-8.017C477.795,42.07,474.206,38.48,469.779,38.48z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M264.551,29.929c-3.835,0-7.612,0.647-11.222,1.924c-0.009,0.003-0.016,0.008-0.025,0.01
           c-13.412,4.754-22.423,17.504-22.423,31.737c0,14.232,9.011,26.982,22.422,31.737c0.009,0.003,0.016,0.008,0.025,0.011
           c3.611,1.276,7.387,1.924,11.222,1.924c18.566,0,33.67-15.105,33.67-33.67S283.117,29.929,264.551,29.929z M264.551,81.236
           c-2.011,0-3.988-0.339-5.88-1.007c-0.001,0-0.002-0.001-0.003-0.001c-7.03-2.488-11.754-9.17-11.754-16.629
           s4.723-14.14,11.755-16.629c0.001,0,0.002,0,0.003-0.001c1.891-0.669,3.869-1.007,5.88-1.007c9.725,0,17.637,7.912,17.637,17.637
           S274.276,81.236,264.551,81.236z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M170.489,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67
           S189.054,29.929,170.489,29.929z M170.489,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637
           s17.637,7.912,17.637,17.637S180.213,81.236,170.489,81.236z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M76.426,29.929c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.104,33.67-33.67
           S94.992,29.929,76.426,29.929z M76.426,81.236c-9.725,0-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637
           s17.637,7.912,17.637,17.637S86.151,81.236,76.426,81.236z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M480.454,214.537l-84.651-84.653c-3.131-3.131-8.207-3.131-11.338,0L330.5,183.85H256H72.15
           c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H256h58.466l-64.135,64.135l-56.65,56.65H72.15
           c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h105.497l-17.278,17.278c-0.009,0.009-0.017,0.017-0.027,0.027
           l-0.014,0.014c-0.025,0.025-0.045,0.051-0.069,0.077c-0.159,0.164-0.314,0.332-0.461,0.51c-0.055,0.065-0.1,0.135-0.153,0.202
           c-0.108,0.14-0.216,0.28-0.315,0.429c-0.065,0.097-0.122,0.199-0.183,0.299c-0.074,0.122-0.151,0.243-0.218,0.37
           c-0.068,0.128-0.127,0.26-0.188,0.39c-0.049,0.105-0.102,0.207-0.146,0.315c-0.067,0.162-0.124,0.329-0.181,0.495
           c-0.028,0.082-0.06,0.161-0.086,0.245c-0.064,0.212-0.117,0.426-0.162,0.642c-0.009,0.042-0.022,0.081-0.031,0.123l-0.005,0.025
           c-0.002,0.01-0.004,0.019-0.005,0.029l-19.862,99.316H72.15c-4.427,0-8.017,3.589-8.017,8.017c0,4.427,3.589,8.017,8.017,8.017
           h72.641c0.012,0,0.023,0.001,0.036,0.001c0.003,0,0.005,0,0.009,0c0.003,0,0.005,0,0.009,0c0.012,0,0.024-0.001,0.036-0.001h6.276
           c2.139,0,4.077-0.843,5.514-2.208l35.038-7.008c0.005-0.001,0.01-0.002,0.015-0.003l0.032-0.006l60.415-12.083
           c0.007-0.001,0.015-0.003,0.023-0.004l0.028-0.005c0.047-0.01,0.091-0.025,0.138-0.035c0.21-0.046,0.419-0.096,0.625-0.158
           c0.088-0.027,0.171-0.061,0.258-0.09c0.161-0.056,0.324-0.11,0.482-0.175c0.112-0.047,0.219-0.102,0.328-0.153
           c0.126-0.059,0.253-0.115,0.377-0.182c0.13-0.07,0.253-0.148,0.378-0.223c0.097-0.059,0.197-0.114,0.291-0.177
           c0.149-0.099,0.29-0.208,0.431-0.316c0.066-0.051,0.136-0.097,0.201-0.152c0.175-0.144,0.341-0.297,0.503-0.455
           c0.027-0.027,0.057-0.048,0.082-0.075l0.016-0.016c0.009-0.009,0.017-0.016,0.025-0.025l5.309-5.309l110.306-110.306
           l48.015-48.015l60.465-60.465C483.584,222.743,483.584,217.667,480.454,214.537z M202.669,334.353
           c0.001-0.001,0.002-0.002,0.003-0.002l58.998-58.998l68-68l15.872,15.873L193.208,375.56l-15.873-15.873L202.669,334.353z
            M356.878,234.564l18.896,18.896l-69.556,69.556l-55.886,55.886l-26.891,26.891l-18.896-18.896L356.878,234.564z M155.055,455.283
           l3.774-18.869l15.095,15.095L155.055,455.283z M192.819,447.731l-30.211-30.211l8.314-41.57l16.618,16.618l30.233,30.233
           l16.618,16.617L192.819,447.731z M360.637,323.016L250.65,433.002l-15.873-15.872l26.891-26.891l55.886-55.886l69.556-69.556
           l15.872,15.872L360.637,323.016z M414.32,269.332l-21.54-21.54l-30.234-30.233l-21.54-21.541l49.129-49.128l73.314,73.314
           L414.32,269.332z"/>
            </g>
        </g>
        <g>
            <g>
                <path d="M394.211,169.096c-3.13-3.131-8.207-3.131-11.337,0l-19.24,19.24c-3.131,3.131-3.131,8.207,0,11.337
           c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l19.24-19.24C397.342,177.302,397.342,172.225,394.211,169.096z"/>
            </g>
        </g>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
}


function globe_stroke() {
    return <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM175.047,447.667A208.26,208.26,0,0,1,64.333,175.047c1.018-2.408,2.092-4.785,3.2-7.145L120,215.126v63.235L197.1,360H236v49.047l-47.052,43.915Q181.926,450.568,175.047,447.667Zm228.031-44.589A207.253,207.253,0,0,1,256,464a210.4,210.4,0,0,1-29.722-2.107L268,422.953V328H210.9L152,265.639V200.874L83.7,139.408a209.259,209.259,0,0,1,91.343-75.075A207.793,207.793,0,0,1,371.3,82.839l-45.564,58.582,15.49,38.725-10.485,10.485-78.618-15.723L208,208v88H384l50.345,67.126A208.127,208.127,0,0,1,403.078,403.078ZM464,256a206.763,206.763,0,0,1-13.873,74.837L400,264H240V224l19.877-14.908,81.382,16.277,37.515-37.515-16.51-41.275,34.2-43.977q3.361,3.084,6.61,6.32A207.253,207.253,0,0,1,464,256Z" />
    </svg>
}


function tick() {
    return <svg viewBox="0 -20 130 130" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.7162 81.5027C36.3213 79.9761 37.2031 79.2039 38.0103 78.3599C63.8892 51.3046 92.2309 26.9469 120.74 2.77407C121.817 1.86111 122.921 0.696462 124.196 0.3701C125.733 -0.0238104 128.241 -0.282655 128.928 0.552804C129.852 1.67765 130.015 4.12286 129.452 5.60109C128.782 7.35947 127.15 8.86542 125.669 10.1822C116.833 18.0391 107.749 25.6258 99.0678 33.6462C80.9213 50.4165 62.8904 67.3116 44.9751 84.3312C37.125 91.7736 34.1038 92.075 26.8803 84.1228C22.1253 78.8861 7.77509 61.237 3.38035 55.6767C2.75974 54.8123 2.20692 53.9011 1.72689 52.9513C0.732118 51.1915 0.0876263 49.254 2.05727 47.8895C4.25215 46.3708 5.81043 47.9557 7.11073 49.606C8.42738 51.2769 9.55004 53.1127 10.9598 54.6962C15.336 59.6122 29.9896 76.32 34.7162 81.5027Z" />
    </svg>
}


export {
    facebook,
    mail,
    twitter,
    github,
    phone,
    desktopSvg, desktopSvg_2,
    medalSvg,
    layersSvg,
    statitics,
    vector,
    android,
    content,
    globe_stroke,
    tick
}